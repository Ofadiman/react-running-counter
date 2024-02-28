import { Fragment, useEffect, useRef, useState } from 'react'

export const Counter = () => {
  const audioRef = useRef(new Audio('public/1-second-of-silence.mp3'))
  const isRunningRef = useRef(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    audioRef.current.volume = 0

    audioRef.current.onended = () => {
      if (isRunningRef.current === true) {
        setCount((prev) => prev + 1)
        audioRef.current.play()
      }
    }
  }, [])

  const handleStart = () => {
    if (isRunningRef.current === true) {
      return
    }

    isRunningRef.current = true
    audioRef.current.play()
  }

  const handleStop = () => {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    isRunningRef.current = false
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
