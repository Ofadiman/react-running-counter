import { Fragment, useEffect, useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      const timeoutId = window.setTimeout(() => {
        setCount((prev) => prev + 1)
      }, 1000)

      return () => {
        window.clearTimeout(timeoutId)
      }
    }
  }, [isRunning, count])

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
