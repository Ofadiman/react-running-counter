import { useEffect, useRef, useState } from "react";

export const Counter = () => {
  const intervalIdRef = useRef<null | number>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        window.clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  const handleStart = () => {
    if (intervalIdRef.current !== null) {
      return;
    }

    intervalIdRef.current = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    if (intervalIdRef.current) {
      window.clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
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
