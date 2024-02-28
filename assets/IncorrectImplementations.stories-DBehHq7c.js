import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as n}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const v=()=>{const[t,r]=n.useState(null),[s,o]=n.useState(0);n.useEffect(()=>()=>{t&&window.clearInterval(t)},[t]);const c=()=>{r(u=>u||window.setInterval(()=>{o(h=>h+1)},1e3))},l=()=>{t&&(window.clearInterval(t),r(null))},d=()=>{o(0)};return e.jsxs(n.Fragment,{children:[e.jsxs("p",{children:["count: ",s]}),e.jsx("button",{onClick:c,children:"start"}),e.jsx("button",{onClick:l,children:"stop"}),e.jsx("button",{onClick:d,children:"reset"})]})},I=`import { Fragment, useEffect, useState } from 'react'

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
`,b=()=>{const[t,r]=n.useState(0),[s,o]=n.useState(!1);n.useEffect(()=>{if(s){const u=window.setTimeout(()=>{r(h=>h+1)},1e3);return()=>{window.clearTimeout(u)}}},[s,t]);const c=()=>{o(!0)},l=()=>{o(!1)},d=()=>{r(0)};return e.jsxs(n.Fragment,{children:[e.jsxs("p",{children:["count: ",t]}),e.jsx("button",{onClick:c,children:"start"}),e.jsx("button",{onClick:l,children:"stop"}),e.jsx("button",{onClick:d,children:"reset"})]})},C=`import { Fragment, useEffect, useState } from 'react'

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
`,k={title:"Incorrect implementations",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}},a={name:"useState storing interval id",render:()=>e.jsx(v,{}),parameters:{docs:{description:{story:"Implementation that is using `useState` hook for storing interval id is not possible. This happens because after the component is rendered, the user can click the button very quickly many times, and we are unable to prevent starting multiple intervals because the state will not have time to update."},source:{code:I}}}},i={name:"useEffect scheduling timeout and re-running on count change",render:()=>e.jsx(b,{}),parameters:{docs:{description:{story:"In this solution, `handleStart` and `handleStop` functions toggle between start/stop state causing `useEffect` to run. Additionally, `useEffect` will be re-run after every `count` change which will recursively increment the counter. Cleanup function returned from `useEffect` will correctly clear the timeout after the component unmounts. However, this solution has a subtle bug. When `handleReset` function is called, it will reset the counter to 0 which will cause the cleanup function from `useEffect` to run meaning the current timeout will be cleared and a new timeout will be scheduled. If we reset state after 999 milliseconds passed after scheduling a timeout, we will cancel that timeout and schedule a new timeout without incrementing the counter which breaks the requirement saying that the counter should increment roughly every second."},source:{code:C}}}};var m,f,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'useState storing interval id',
  render: () => {
    return <UseStateStoringIntervalId />;
  },
  parameters: {
    docs: {
      description: {
        story: \`Implementation that is using \\\`useState\\\` hook for storing interval id is not possible. This happens because after the component is rendered, the user can click the button very quickly many times, and we are unable to prevent starting multiple intervals because the state will not have time to update.\`
      },
      source: {
        code: UseStateStoringIntervalIdSourceCode
      }
    }
  }
}`,...(p=(f=a.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var g,w,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{\n  name: 'useEffect scheduling timeout and re-running on count change',\n  render: () => {\n    return <UseEffectSchedulingTimeoutRerunningOnCountChange />;\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `In this solution, \\`handleStart\\` and \\`handleStop\\` functions toggle between start/stop state causing \\`useEffect\\` to run. Additionally, \\`useEffect\\` will be re-run after every \\`count\\` change which will recursively increment the counter. Cleanup function returned from \\`useEffect\\` will correctly clear the timeout after the component unmounts. However, this solution has a subtle bug. When \\`handleReset\\` function is called, it will reset the counter to 0 which will cause the cleanup function from \\`useEffect\\` to run meaning the current timeout will be cleared and a new timeout will be scheduled. If we reset state after 999 milliseconds passed after scheduling a timeout, we will cancel that timeout and schedule a new timeout without incrementing the counter which breaks the requirement saying that the counter should increment roughly every second.`\n      },\n      source: {\n        code: UseEffectSchedulingTimeoutRerunningOnCountChangeSourceCode\n      }\n    }\n  }\n}",...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const x=["UseStateStoringIntervalIdStory","UseEffectSchedulingTimeoutRerunningOnCountChangeStory"];export{i as UseEffectSchedulingTimeoutRerunningOnCountChangeStory,a as UseStateStoringIntervalIdStory,x as __namedExportsOrder,k as default};
