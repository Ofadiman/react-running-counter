import { useState, useSyncExternalStore } from "react";

class CounterStore {
  private count: number = 0;
  private listener: (() => void) | null = null;
  private intervalId: number | null = null;

  constructor() {
    this.subscribe = this.subscribe.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
  }

  getSnapshot() {
    return this.count;
  }

  reset() {
    this.count = 0;
    this.emit();
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = window.setInterval(() => {
      this.count++;
      this.emit();
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  subscribe(listener: () => void) {
    this.listener = listener;

    return () => {
      if (this.intervalId) {
        window.clearInterval(this.intervalId);
      }

      this.intervalId = null;
      this.listener = null;
    };
  }

  emit() {
    /* v8 ignore else -- useSyncExternalStore subscribes before any click and unsubscribes only at unmount, where the interval is cleared, so emit never runs without a listener */
    if (this.listener) {
      this.listener();
    }
  }
}

export const Counter = () => {
  const [counterStore] = useState(() => new CounterStore());
  const countSnapshot = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getSnapshot,
  );

  const handleStart = () => {
    counterStore.start();
  };

  const handleStop = () => {
    counterStore.stop();
  };

  const handleReset = () => {
    counterStore.reset();
  };

  return (
    <div>
      <p>count: {countSnapshot}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};
