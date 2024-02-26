import { Fragment, useEffect, useRef, useState } from 'react'

export const Counter = () => {
  const intervalIdRef = useRef<null | number>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        window.clearInterval(intervalIdRef.current)
      }
    }
  }, [])

  const handleStart = () => {
    if (intervalIdRef.current !== null) {
      return
    }

    intervalIdRef.current = window.setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }

  const handleStop = () => {
    if (intervalIdRef.current) {
      window.clearInterval(intervalIdRef.current)
      intervalIdRef.current = null
    }
  }

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
