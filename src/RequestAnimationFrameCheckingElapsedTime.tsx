import { Fragment, useEffect, useRef, useState } from 'react'

export const Counter = () => {
  const nowRef = useRef<number | null>(null)
  const animationFrameIdRef = useRef<number | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      if (animationFrameIdRef.current) {
        window.cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [])

  const checkTime = () => {
    const now = Date.now()
    if (nowRef.current && nowRef.current + 1_000 < now) {
      nowRef.current = now
      setCount((prev) => prev + 1)
    }

    animationFrameIdRef.current = window.requestAnimationFrame(checkTime)
  }

  const handleStart = () => {
    if (nowRef.current !== null) {
      return
    }

    nowRef.current = Date.now()
    animationFrameIdRef.current = window.requestAnimationFrame(checkTime)
  }

  const handleStop = () => {
    if (animationFrameIdRef.current) {
      nowRef.current = null
      window.cancelAnimationFrame(animationFrameIdRef.current)
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
