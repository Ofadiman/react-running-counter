import { Fragment, useEffect, useState } from 'react'

export const Counter = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isRunning) {
      let timeoutId: null | number = null

      const start = () => {
        timeoutId = window.setTimeout(() => {
          setCount((prev) => prev + 1)
          start()
        }, 1000)
      }

      start()

      return () => {
        if (timeoutId) {
          window.clearTimeout(timeoutId)
        }
      }
    }
  }, [isRunning])

  const handleStart = () => setIsRunning(true)

  const handleStop = () => setIsRunning(false)

  const handleReset = () => setCount(0)

  return (
    <Fragment>
      <p>count: {count}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </Fragment>
  )
}
