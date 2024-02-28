import { Fragment, useRef, useSyncExternalStore } from 'react'

class CounterStore {
  private count: number = 0
  private listener: Function | null = null
  private timeoutId: number | null = null

  constructor() {
    this.subscribe = this.subscribe.bind(this)
    this.getSnapshot = this.getSnapshot.bind(this)
  }

  getSnapshot() {
    return this.count
  }

  reset() {
    this.count = 0
    this.emit()
  }

  start() {
    if (this.timeoutId !== null) {
      return
    }

    this.timeoutId = window.setTimeout(() => {
      this.count++
      this.emit()
      this.timeoutId = null
      this.start()
    }, 1000)
  }

  stop() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId)
      this.timeoutId = null
    }
  }

  subscribe(listener: Function) {
    this.listener = listener

    return () => {
      if (this.timeoutId) {
        window.clearTimeout(this.timeoutId)
      }

      this.timeoutId = null
      this.listener = null
    }
  }

  emit() {
    if (this.listener) {
      this.listener()
    }
  }
}

export const Counter = () => {
  const counterStoreRef = useRef(new CounterStore())
  const countSnapshot = useSyncExternalStore(
    counterStoreRef.current.subscribe,
    counterStoreRef.current.getSnapshot,
  )

  const handleStart = () => {
    counterStoreRef.current.start()
  }

  const handleStop = () => {
    counterStoreRef.current.stop()
  }

  const handleReset = () => {
    counterStoreRef.current.reset()
  }

  return (
    <Fragment>
      <p>count: {countSnapshot}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </Fragment>
  )
}
