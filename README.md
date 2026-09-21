# \<Counter />

A counter that increases its value by 1 every second is a simple functionality to implement... Or is it?

## The task

Create a `<Counter />` component with the following functionality:

- The component displays the current `count` on the screen.
- When the user clicks the `start` button, the counter starts to increment by 1 every second.
- When the user clicks the `stop` button, the counter pauses.
- When the user clicks the `reset` button, the counter resets its value to 0.

Come up with as many implementations as you can.

### Assumptions

- You can ignore long-running, synchronous functions. A function that runs for 100ms delays a `setInterval` callback past the 1 second mark.

### Template

```tsx
export const Counter = () => {
  const handleStart = () => {};

  const handleStop = () => {};

  const handleReset = () => {};

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};
```
