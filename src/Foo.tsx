import { Fragment, useState } from 'react'

export const Foo = () => {
  const [count, setCount] = useState(0)
  return (
    <Fragment>
      <p>count: {count}</p>
      <button onClick={() => setCount((p) => p + 1)}>increment</button>
      <button onClick={() => setCount((p) => p - 1)}>decrement</button>
    </Fragment>
  )
}
