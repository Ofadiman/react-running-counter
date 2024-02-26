import { Fragment, useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'

export default function App() {
  const [isMounted, setIsMounted] = useState(true)

  return (
    <Fragment>
      <div style={{ display: 'flex', gap: 10, margin: '0 0 20px 0' }}>
        <button
          onClick={() => {
            setIsMounted((prev) => !prev)
          }}
        >
          toggle
        </button>
        <span>isMounted: {isMounted.toString()}</span>
      </div>
      {isMounted && <SolutionNine />}
    </Fragment>
  )
}

class Counter {
  private count: number = 0
  private listener: Function | null = null
  private intervalId: number | null = null

  constructor() {
    this.subscribe = this.subscribe.bind(this)
    this.getSnapshot = this.getSnapshot.bind(this)
    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.emit = this.emit.bind(this)
  }

  getSnapshot() {
    return this.count
  }

  reset() {
    this.count = 0
    this.emit()
  }

  start() {
    if (this.intervalId !== null) {
      return
    }

    this.intervalId = window.setInterval(() => {
      this.count = this.count + 1
      this.emit()
    }, 1000)
  }

  stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  subscribe(listener: () => void) {
    this.listener = listener
    return () => {
      this.listener = null
    }
  }

  emit() {
    if (this.listener) {
      this.listener()
    }
  }
}

function SolutionTen() {
  const counterRef = useRef(new Counter())
  const count = useSyncExternalStore(counterRef.current.subscribe, counterRef.current.getSnapshot)

  const handleStart = () => {
    counterRef.current.start()
  }

  const handleStop = () => {
    counterRef.current.stop()
  }

  const handleReset = () => {
    counterRef.current.reset()
  }

  return (
    <div>
      <p>solution 10</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionNine() {
  const nowRef = useRef<number | null>(null)
  // const audioRef = useRef(new Audio('https://cdn.freesound.org/previews/724/724968_5674468-lq.mp3')) // long audio
  const audioRef = useRef(new Audio('https://cdn.freesound.org/previews/722/722772_8331855-lq.mp3')) // short audio
  const [count, setCount] = useState(0)

  useEffect(() => {
    audioRef.current.volume = 0

    audioRef.current.ontimeupdate = () => {
      const now = Date.now()
      if (nowRef.current && nowRef.current + 1_000 < now) {
        nowRef.current = now
        setCount((prev) => prev + 1)
      }
    }

    audioRef.current.onended = () => {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }, [])

  const handleStart = () => {
    if (nowRef.current === null) {
      nowRef.current = Date.now()
      audioRef.current.play()
    }
  }

  const handleStop = () => {
    nowRef.current = null
    audioRef.current.pause()
  }

  const handleReset = () => setCount(0)

  return (
    <div>
      <p>solution 9</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionEight() {
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

  const handleStart = () => {
    if (nowRef.current !== null) {
      return
    }

    nowRef.current = Date.now()

    const checkTime = () => {
      const now = Date.now()
      if (nowRef.current && nowRef.current + 1_000 < now) {
        nowRef.current = now
        setCount((prev) => prev + 1)
      }

      animationFrameIdRef.current = window.requestAnimationFrame(checkTime)
    }

    animationFrameIdRef.current = window.requestAnimationFrame(checkTime)
  }

  const handleStop = () => {
    if (animationFrameIdRef.current) {
      nowRef.current = null
      window.cancelAnimationFrame(animationFrameIdRef.current)
    }
  }

  const handleReset = () => setCount(0)

  return (
    <div>
      <p>solution 8</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionSeven() {
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

  const handleStart = () => setIsRunning(true)

  const handleStop = () => setIsRunning(false)

  const handleReset = () => setCount(0)

  return (
    <div>
      <p>solution 6</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionSix() {
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

  const handleStart = () => setIsRunning(true)

  const handleStop = () => setIsRunning(false)

  const handleReset = () => setCount(0)

  return (
    <div>
      <p>solution 6</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionFive() {
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
    <div>
      <p>solution 5</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionFour() {
  const timeoutIdRef = useRef<number | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        window.clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  const handleStart = () => {
    if (timeoutIdRef.current) {
      return
    }

    timeoutIdRef.current = window.setTimeout(() => {
      timeoutIdRef.current = null
      setCount((prev) => prev + 1)

      handleStart()
    }, 1000)
  }

  const handleStop = () => {
    if (timeoutIdRef.current) {
      window.clearTimeout(timeoutIdRef.current)
      timeoutIdRef.current = null
    }
  }

  const handleReset = () => setCount(0)

  return (
    <div>
      <p>solution 4</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionThree() {
  const [isRunning, setIsRunning] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isRunning === true) {
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
    <div>
      <p>solution 3</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionTwo() {
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

    setIntervalId(
      window.setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000),
    )
  }, [intervalId])

  const handleStop = useCallback(() => {
    if (intervalId) {
      window.clearInterval(intervalId)
    }

    setIntervalId(null)
  }, [intervalId])

  const handleReset = () => setCount(0)

  return (
    <div>
      <p>solution 2</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

function SolutionOne() {
  const intervalRef = useRef<null | number>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleStart = () => {
    if (intervalRef.current !== null) {
      return
    }

    intervalRef.current = window.setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }

  const handleStop = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handleReset = () => setCount(0)

  return (
    <div>
      <p>solution 1</p>
      <div>count: {count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}
