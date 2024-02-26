import { useState } from 'react'

export const StoryBlock = () => {
  const [state, setState] = useState(0)
  return (
    <div className="n-flex n-flex-col n-gap-2 n-max-w-max">
      <button data-testid="button" onClick={() => setState(state + 1)}>
        Update state
      </button>
      <div data-testid="count">{state}</div>
    </div>
  )
}
