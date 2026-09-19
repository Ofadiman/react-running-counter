import { useEffect, useRef, useState } from "react";

export const Counter = () => {
  const timeoutIdRef = useRef<number | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        window.clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const handleStart = () => {
    if (timeoutIdRef.current) {
      return;
    }

    timeoutIdRef.current = window.setTimeout(() => {
      timeoutIdRef.current = null;
      setCount((prev) => prev + 1);

      handleStart();
    }, 1000);
  };

  const handleStop = () => {
    if (timeoutIdRef.current) {
      window.clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
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
