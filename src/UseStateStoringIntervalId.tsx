import { Fragment, useEffect, useState } from 'react'

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

  const handleStart = () => {
    setIntervalId((prev) => {
      if (prev) {
        return prev
      }

      return window.setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000)
    })
  }

  const handleStop = () => {
    if (intervalId) {
      window.clearInterval(intervalId)
      setIntervalId(null)
    }
  }

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
