import { useEffect, useState } from "react";

export const Counter = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId: number | undefined;

    const start = () => {
      timeoutId = window.setTimeout(() => {
        setCount((prev) => prev + 1);
        start();
      }, 1000);
    };

    if (isRunning) {
      start();
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <p className="counter-value">count: {count}</p>
      <div className="counter-actions">
        <button className="counter-button" onClick={handleStart}>
          start
        </button>
        <button className="counter-button" onClick={handleStop}>
          stop
        </button>
        <button className="counter-button" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
};
