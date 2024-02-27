# \<Counter />

A counter that increases its value by 1 every second is a simple functionality to implement... Or is it?

#### Description

Create `<Counter />` component with the following functionality:

- The component displays the current `count` on the screen.
- When the user clicks the `start` button, the counter should start incrementing by 1 every second.
- When the user clicks the `stop` button, the counter should pause.
- When the user clicks the `reset` button, the counter should reset its value to 0.

Come up with as many implementations as you can using various `React` and `DOM` APIs.

#### Assumptions

- You can ignore long-running, synchronous functions (e.g. a function that runs for 100ms) that could cause e.g. `setInterval` callbacks not being executed closely to 1 second.

#### Component template

```tsx
import React from 'react'

export const Counter = () => {
  const handleStart = () => {}

  const handleStop = () => {}

  const handleReset = () => {}

  return (
    <Fragment>
      <p>count: 0</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </Fragment>
  )
}
```
