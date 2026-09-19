import { useEffect, useState } from "react";

export const Counter = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
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
