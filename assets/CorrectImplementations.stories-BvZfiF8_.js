var G=Object.defineProperty;var J=(e,t,s)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var d=(e,t,s)=>(J(e,typeof t!="symbol"?t+"":t,s),s);import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const K=()=>{const e=r.useRef(null),[t,s]=r.useState(0);r.useEffect(()=>()=>{e.current&&window.clearInterval(e.current)},[]);const o=()=>{e.current===null&&(e.current=window.setInterval(()=>{s(c=>c+1)},1e3))},i=()=>{e.current&&(window.clearInterval(e.current),e.current=null)},u=()=>{s(0)};return n.jsxs(r.Fragment,{children:[n.jsxs("p",{children:["count: ",t]}),n.jsx("button",{onClick:o,children:"start"}),n.jsx("button",{onClick:i,children:"stop"}),n.jsx("button",{onClick:u,children:"reset"})]})},N=`import { Fragment, useEffect, useRef, useState } from 'react'

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
`,Q=()=>{const[e,t]=r.useState(!1),[s,o]=r.useState(0);r.useEffect(()=>{if(e){const a=window.setInterval(()=>{o(l=>l+1)},1e3);return()=>{window.clearInterval(a)}}},[e]);const i=()=>{t(!0)},u=()=>{t(!1)},c=()=>{o(0)};return n.jsxs(r.Fragment,{children:[n.jsxs("p",{children:["count: ",s]}),n.jsx("button",{onClick:i,children:"start"}),n.jsx("button",{onClick:u,children:"stop"}),n.jsx("button",{onClick:c,children:"reset"})]})},W=`import { Fragment, useEffect, useState } from 'react'

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
`,X=()=>{const e=r.useRef(null),[t,s]=r.useState(0);r.useEffect(()=>()=>{e.current&&window.clearTimeout(e.current)},[]);const o=()=>{e.current||(e.current=window.setTimeout(()=>{e.current=null,s(c=>c+1),o()},1e3))},i=()=>{e.current&&(window.clearTimeout(e.current),e.current=null)},u=()=>{s(0)};return n.jsxs(r.Fragment,{children:[n.jsxs("p",{children:["count: ",t]}),n.jsx("button",{onClick:o,children:"start"}),n.jsx("button",{onClick:i,children:"stop"}),n.jsx("button",{onClick:u,children:"reset"})]})},Y=`import { Fragment, useEffect, useRef, useState } from 'react'

export const Counter = () => {
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
`,Z=()=>{const[e,t]=r.useState(!1),[s,o]=r.useState(0);r.useEffect(()=>{if(e){let a=null;const l=()=>{a=window.setTimeout(()=>{o(b=>b+1),l()},1e3)};return l(),()=>{a&&window.clearTimeout(a)}}},[e]);const i=()=>{t(!0)},u=()=>{t(!1)},c=()=>{o(0)};return n.jsxs(r.Fragment,{children:[n.jsxs("p",{children:["count: ",s]}),n.jsx("button",{onClick:i,children:"start"}),n.jsx("button",{onClick:u,children:"stop"}),n.jsx("button",{onClick:c,children:"reset"})]})},ee=`import { Fragment, useEffect, useState } from 'react'

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
`,ne=()=>{const e=r.useRef(null),t=r.useRef(null),[s,o]=r.useState(0);r.useEffect(()=>()=>{t.current&&window.cancelAnimationFrame(t.current)},[]);const i=()=>{const l=Date.now();e.current&&e.current+1e3<l&&(e.current=l,o(b=>b+1)),t.current=window.requestAnimationFrame(i)},u=()=>{e.current===null&&(e.current=Date.now(),t.current=window.requestAnimationFrame(i))},c=()=>{t.current&&(e.current=null,window.cancelAnimationFrame(t.current))},a=()=>{o(0)};return n.jsxs(r.Fragment,{children:[n.jsxs("p",{children:["count: ",s]}),n.jsx("button",{onClick:u,children:"start"}),n.jsx("button",{onClick:c,children:"stop"}),n.jsx("button",{onClick:a,children:"reset"})]})},te=`import { Fragment, useEffect, useRef, useState } from 'react'

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
`,re=()=>{const e=r.useRef(new Audio("public/1-second-of-silence.mp3")),t=r.useRef(!1),[s,o]=r.useState(0);r.useEffect(()=>{e.current.volume=0,e.current.onended=()=>{t.current===!0&&(o(a=>a+1),e.current.play())}},[]);const i=()=>{t.current!==!0&&(t.current=!0,e.current.play())},u=()=>{e.current.pause(),e.current.currentTime=0,t.current=!1},c=()=>{o(0)};return n.jsxs(r.Fragment,{children:[n.jsxs("p",{children:["count: ",s]}),n.jsx("button",{onClick:i,children:"start"}),n.jsx("button",{onClick:u,children:"stop"}),n.jsx("button",{onClick:c,children:"reset"})]})},se=`import { Fragment, useEffect, useRef, useState } from 'react'

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
`;let oe=class{constructor(){d(this,"count",0);d(this,"listener",null);d(this,"intervalId",null);this.subscribe=this.subscribe.bind(this),this.getSnapshot=this.getSnapshot.bind(this)}getSnapshot(){return this.count}reset(){this.count=0,this.emit()}start(){this.intervalId===null&&(this.intervalId=window.setInterval(()=>{this.count++,this.emit()},1e3))}stop(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=null)}subscribe(t){return this.listener=t,()=>{this.intervalId&&window.clearInterval(this.intervalId),this.intervalId=null,this.listener=null}}emit(){this.listener&&this.listener()}};const ie=()=>{const e=r.useRef(new oe),t=r.useSyncExternalStore(e.current.subscribe,e.current.getSnapshot),s=()=>{e.current.start()},o=()=>{e.current.stop()},i=()=>{e.current.reset()};return n.jsxs(r.Fragment,{children:[n.jsxs("p",{children:["count: ",t]}),n.jsx("button",{onClick:s,children:"start"}),n.jsx("button",{onClick:o,children:"stop"}),n.jsx("button",{onClick:i,children:"reset"})]})},ue=`import { Fragment, useRef, useSyncExternalStore } from 'react'

class CounterStore {
  private count: number = 0
  private listener: Function | null = null
  private intervalId: number | null = null

  constructor() {
    this.subscribe = this.subscribe.bind(this)
    this.getSnapshot = this.getSnapshot.bind(this)
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
      this.count++
      this.emit()
    }, 1000)
  }

  stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  subscribe(listener: Function) {
    this.listener = listener

    return () => {
      if (this.intervalId) {
        window.clearInterval(this.intervalId)
      }

      this.intervalId = null
      this.listener = null
    }
  }

  emit() {
    if (this.listener) {
      this.listener()
    }
  }
}

export const Counter = () => {
  const counterStoreRef = useRef(new CounterStore())
  const countSnapshot = useSyncExternalStore(
    counterStoreRef.current.subscribe,
    counterStoreRef.current.getSnapshot,
  )

  const handleStart = () => {
    counterStoreRef.current.start()
  }

  const handleStop = () => {
    counterStoreRef.current.stop()
  }

  const handleReset = () => {
    counterStoreRef.current.reset()
  }

  return (
    <Fragment>
      <p>count: {countSnapshot}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </Fragment>
  )
}
`;class ce{constructor(){d(this,"count",0);d(this,"listener",null);d(this,"timeoutId",null);this.subscribe=this.subscribe.bind(this),this.getSnapshot=this.getSnapshot.bind(this)}getSnapshot(){return this.count}reset(){this.count=0,this.emit()}start(){this.timeoutId===null&&(this.timeoutId=window.setTimeout(()=>{this.count++,this.emit(),this.timeoutId=null,this.start()},1e3))}stop(){this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=null)}subscribe(t){return this.listener=t,()=>{this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=null,this.listener=null}}emit(){this.listener&&this.listener()}}const ae=()=>{const e=r.useRef(new ce),t=r.useSyncExternalStore(e.current.subscribe,e.current.getSnapshot),s=()=>{e.current.start()},o=()=>{e.current.stop()},i=()=>{e.current.reset()};return n.jsxs(r.Fragment,{children:[n.jsxs("p",{children:["count: ",t]}),n.jsx("button",{onClick:s,children:"start"}),n.jsx("button",{onClick:o,children:"stop"}),n.jsx("button",{onClick:i,children:"reset"})]})},le=`import { Fragment, useRef, useSyncExternalStore } from 'react'

class CounterStore {
  private count: number = 0
  private listener: Function | null = null
  private timeoutId: number | null = null

  constructor() {
    this.subscribe = this.subscribe.bind(this)
    this.getSnapshot = this.getSnapshot.bind(this)
  }

  getSnapshot() {
    return this.count
  }

  reset() {
    this.count = 0
    this.emit()
  }

  start() {
    if (this.timeoutId !== null) {
      return
    }

    this.timeoutId = window.setTimeout(() => {
      this.count++
      this.emit()
      this.timeoutId = null
      this.start()
    }, 1000)
  }

  stop() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId)
      this.timeoutId = null
    }
  }

  subscribe(listener: Function) {
    this.listener = listener

    return () => {
      if (this.timeoutId) {
        window.clearTimeout(this.timeoutId)
      }

      this.timeoutId = null
      this.listener = null
    }
  }

  emit() {
    if (this.listener) {
      this.listener()
    }
  }
}

export const Counter = () => {
  const counterStoreRef = useRef(new CounterStore())
  const countSnapshot = useSyncExternalStore(
    counterStoreRef.current.subscribe,
    counterStoreRef.current.getSnapshot,
  )

  const handleStart = () => {
    counterStoreRef.current.start()
  }

  const handleStop = () => {
    counterStoreRef.current.stop()
  }

  const handleReset = () => {
    counterStoreRef.current.reset()
  }

  return (
    <Fragment>
      <p>count: {countSnapshot}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </Fragment>
  )
}
`,Se={title:"Correct implementations",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}},h={name:"useRef storing interval id",render:()=>n.jsx(K,{}),parameters:{docs:{description:{story:"In this solution, `handleStart` function checks if the interval is already scheduled and if not, it schedules a new interval. `handleStop` function clears the interval and sets the references to its id to `null` so that it is possible to schedule a new interval using `handleStart` later. `useEffect` is responsible for clearing interval after the component unmounts."},source:{code:N}}}},m={name:"useEffect scheduling interval",render:()=>n.jsx(Q,{}),parameters:{docs:{description:{story:"In this solution, `handleStart` and `handleStop` functions toggle between start/stop state causing `useEffect` to run. Function passed to `useEffect` schedules interval if the state is set to running and returns a cleanup function which will clear the interval after the component unmounts or changes state to not running."},source:{code:W}}}},f={name:"useEffect scheduling timeout recursively",render:()=>n.jsx(Z,{}),parameters:{docs:{description:{story:"In this solution, `handleStart` and `handleStop` functions toggle between start/stop state causing `useEffect` to run. Function passed to `useEffect` schedules timeout recursively if the state is set to running and returns a cleanup function which will clear the timeout after the component unmounts or changes state to not running."},source:{code:ee}}}},p={name:"handleStart function scheduling timeout recursively",render:()=>n.jsx(X,{}),parameters:{docs:{description:{story:"This solution relies on the fact that the function `handleStart` is called recursively running a timeout on each execution. The `handleStop` function clears the timeout and sets the references to its id to `null` so that it is possible to schedule a new timeout using `handleStart` later. `useEffect` is responsible for clearing timeout after the component unmounts."},source:{code:Y}}}},S={name:"requestAnimationFrame checking elapsed time",render:()=>n.jsx(ne,{}),parameters:{docs:{description:{story:"In this solution, `window.requestAnimationFrame` API is used to invoke a function responsible for incrementing counter approximately every 16 ms. The `handleStart` function sets the timestamp when checks if 1 second elapsed start and calls `checkTime` using `window.requestAnimationFrame` API. The `checkTime` function then checks if 1 second elapsed, and if so, updates the timestamp and counter state, and calls itself recursively using `window.requestAnimationFrame` API. `handleStop` function cancels animation frame and resets the timestamp when checks has started. `useEffect` is used to cancel animation frame after component unmounts, thus stopping the checks."},source:{code:te}}}},g={name:"useEffect playing media element",render:()=>n.jsx(re,{}),parameters:{docs:{description:{story:"This solution uses `HTMLVideoElement` or `HTMLAudioElement` to measure time. Media element is created in a way it takes exactly one second. After calling the `handleStart` function, we check if the counter is already running and if not we start playing the media element. The `handleStop` function pauses the media element and resets its current position to the beginning. `useEffect` binds a function to the `onended` media element property responsible for incrementing the counter by 1 and replaying the media element recursively. The media element volume is set to 0 for convenience."},source:{code:se}}}},v={name:"useSyncExternalStore scheduling interval",render:()=>n.jsx(ie,{}),parameters:{docs:{description:{story:"In this solution, all the logic for scheduling interval is abstracted away to `CounterStore` class (i.e. `external store`) and `useSyncExternalStore` hook is used to subscribe to the store and retrive the counter value. From a logical point of view, this solution is the same as the previous solution with the interval, but uses a different React API."},source:{code:ue}}}},R={name:"useSyncExternalStore scheduling timeout recursively",render:()=>n.jsx(ae,{}),parameters:{docs:{description:{story:"In this solution, all the logic for scheduling interval is abstracted away to `CounterStore` class (i.e. `external store`) and `useSyncExternalStore` hook is used to subscribe to the store and retrive the counter value. From a logical point of view, this solution is the same as the previous solution with recursive timeout scheduling, but uses a different React API."},source:{code:le}}}};var w,I,y;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'useRef storing interval id',
  render: () => {
    return <UseRefStoringIntervalId />;
  },
  parameters: {
    docs: {
      description: {
        story: \`In this solution, \\\`handleStart\\\` function checks if the interval is already scheduled and if not, it schedules a new interval. \\\`handleStop\\\` function clears the interval and sets the references to its id to \\\`null\\\` so that it is possible to schedule a new interval using \\\`handleStart\\\` later. \\\`useEffect\\\` is responsible for clearing interval after the component unmounts.\`
      },
      source: {
        code: UseRefStoringIntervalIdSourceCode
      }
    }
  }
}`,...(y=(I=h.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var C,x,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'useEffect scheduling interval',
  render: () => {
    return <UseEffectSchedulingInterval />;
  },
  parameters: {
    docs: {
      description: {
        story: \`In this solution, \\\`handleStart\\\` and \\\`handleStop\\\` functions toggle between start/stop state causing \\\`useEffect\\\` to run. Function passed to \\\`useEffect\\\` schedules interval if the state is set to running and returns a cleanup function which will clear the interval after the component unmounts or changes state to not running.\`
      },
      source: {
        code: UseEffectSchedulingIntervalSourceCode
      }
    }
  }
}`,...(E=(x=m.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var k,F,T;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'useEffect scheduling timeout recursively',
  render: () => {
    return <UseEffectSchedulingTimeoutRecursively />;
  },
  parameters: {
    docs: {
      description: {
        story: \`In this solution, \\\`handleStart\\\` and \\\`handleStop\\\` functions toggle between start/stop state causing \\\`useEffect\\\` to run. Function passed to \\\`useEffect\\\` schedules timeout recursively if the state is set to running and returns a cleanup function which will clear the timeout after the component unmounts or changes state to not running.\`
      },
      source: {
        code: UseEffectSchedulingTimeoutRecursivelySourceCode
      }
    }
  }
}`,...(T=(F=f.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var j,A,U;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'handleStart function scheduling timeout recursively',
  render: () => {
    return <HandleStartFunctionSchedulingTimeoutRecursively />;
  },
  parameters: {
    docs: {
      description: {
        story: \`This solution relies on the fact that the function \\\`handleStart\\\` is called recursively running a timeout on each execution. The \\\`handleStop\\\` function clears the timeout and sets the references to its id to \\\`null\\\` so that it is possible to schedule a new timeout using \\\`handleStart\\\` later. \\\`useEffect\\\` is responsible for clearing timeout after the component unmounts.\`
      },
      source: {
        code: HandleStartFunctionSchedulingTimeoutRecursivelySourceCode
      }
    }
  }
}`,...(U=(A=p.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var q,P,M;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:"{\n  name: 'requestAnimationFrame checking elapsed time',\n  render: () => {\n    return <RequestAnimationFrameCheckingElapsedTime />;\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `In this solution, \\`window.requestAnimationFrame\\` API is used to invoke a function responsible for incrementing counter approximately every 16 ms. The \\`handleStart\\` function sets the timestamp when checks if 1 second elapsed start and calls \\`checkTime\\` using \\`window.requestAnimationFrame\\` API. The \\`checkTime\\` function then checks if 1 second elapsed, and if so, updates the timestamp and counter state, and calls itself recursively using \\`window.requestAnimationFrame\\` API. \\`handleStop\\` function cancels animation frame and resets the timestamp when checks has started. \\`useEffect\\` is used to cancel animation frame after component unmounts, thus stopping the checks.`\n      },\n      source: {\n        code: RequestAnimationFrameCheckingElapsedTimeSourceCode\n      }\n    }\n  }\n}",...(M=(P=S.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var H,$,D;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'useEffect playing media element',
  render: () => {
    return <UseEffectPlayingMediaElement />;
  },
  parameters: {
    docs: {
      description: {
        story: \`This solution uses \\\`HTMLVideoElement\\\` or \\\`HTMLAudioElement\\\` to measure time. Media element is created in a way it takes exactly one second. After calling the \\\`handleStart\\\` function, we check if the counter is already running and if not we start playing the media element. The \\\`handleStop\\\` function pauses the media element and resets its current position to the beginning. \\\`useEffect\\\` binds a function to the \\\`onended\\\` media element property responsible for incrementing the counter by 1 and replaying the media element recursively. The media element volume is set to 0 for convenience.\`
      },
      source: {
        code: UseEffectPlayingMediaElementSourceCode
      }
    }
  }
}`,...(D=($=g.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var L,_,V;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'useSyncExternalStore scheduling interval',
  render: () => {
    return <UseSyncExternalStoreSchedulingInterval />;
  },
  parameters: {
    docs: {
      description: {
        story: \`In this solution, all the logic for scheduling interval is abstracted away to \\\`CounterStore\\\` class (i.e. \\\`external store\\\`) and \\\`useSyncExternalStore\\\` hook is used to subscribe to the store and retrive the counter value. From a logical point of view, this solution is the same as the previous solution with the interval, but uses a different React API.\`
      },
      source: {
        code: UseSyncExternalStoreSchedulingIntervalSourceCode
      }
    }
  }
}`,...(V=(_=v.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var O,z,B;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'useSyncExternalStore scheduling timeout recursively',
  render: () => {
    return <UseSyncExternalStoreSchedulingTimeoutRecursively />;
  },
  parameters: {
    docs: {
      description: {
        story: \`In this solution, all the logic for scheduling interval is abstracted away to \\\`CounterStore\\\` class (i.e. \\\`external store\\\`) and \\\`useSyncExternalStore\\\` hook is used to subscribe to the store and retrive the counter value. From a logical point of view, this solution is the same as the previous solution with recursive timeout scheduling, but uses a different React API.\`
      },
      source: {
        code: UseSyncExternalStoreSchedulingTimeoutRecursivelySourceCode
      }
    }
  }
}`,...(B=(z=R.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const ge=["UseRefStoringIntervalIdStory","UseEffectSchedulingIntervalStory","UseEffectSchedulingTimeoutRecursivelyStory","HandleStartFunctionSchedulingTimeoutRecursivelyStory","RequestAnimationFrameStory","UseEffectPlayingMediaElementStory","UseSyncExternalStoreSchedulingIntervalStory","UseSyncExternalStoreSchedulingTimeoutRecursivelyStory"];export{p as HandleStartFunctionSchedulingTimeoutRecursivelyStory,S as RequestAnimationFrameStory,g as UseEffectPlayingMediaElementStory,m as UseEffectSchedulingIntervalStory,f as UseEffectSchedulingTimeoutRecursivelyStory,h as UseRefStoringIntervalIdStory,v as UseSyncExternalStoreSchedulingIntervalStory,R as UseSyncExternalStoreSchedulingTimeoutRecursivelyStory,ge as __namedExportsOrder,Se as default};
