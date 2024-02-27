import { Fragment, useCallback, useEffect, useState } from 'react'

export const Counter = () => {
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [intervalId])

  const handleStart = useCallback(() => {
    if (intervalId) {
      return
    }

    const newIntervalId = window.setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)

    setIntervalId(newIntervalId)
  }, [intervalId])

  const handleStop = useCallback(() => {
    if (intervalId) {
      window.clearInterval(intervalId)
      setIntervalId(null)
    }
  }, [intervalId])

  const handleReset = () => {
    setCount(0)
  }

  return (
    <Fragment>
      <p>count: {count}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </Fragment>
  )
}
