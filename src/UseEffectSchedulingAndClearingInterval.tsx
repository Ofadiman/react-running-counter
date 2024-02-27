import { Fragment, useEffect, useState } from 'react'

export const Counter = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isRunning) {
      const intervalId = window.setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000)

      return () => {
        window.clearInterval(intervalId)
      }
    }
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
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
