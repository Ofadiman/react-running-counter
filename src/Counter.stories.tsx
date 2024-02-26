import type { Meta, StoryObj } from '@storybook/react'
import { Counter as UseRefStoringIntervalId } from './UseRefStoringIntervalId'
import UseRefStoringIntervalIdSourceCode from './UseRefStoringIntervalId?raw'
import { Counter as UseStateStoringIntervalId } from './UseStateStoringIntervalId'
import UseStateStoringIntervalIdSourceCode from './UseStateStoringIntervalId?raw'

export default {
  title: 'Counters',
  tags: ['autodocs'],
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
} satisfies Meta

export const UseRefStoringIntervalIdStory: StoryObj = {
  name: 'useRef storing interval id',
  render: () => {
    return <UseRefStoringIntervalId />
  },
  parameters: {
    docs: {
      description: {
        story: `This is the most popular solution to this problem.

- \`handleStart\` function first checks whether an interval has already been started, which prevents an infinite number of intervals from being started. If the interval hasn't been started yet, it starts the interval and stores its id using ref.
- \`handleStop\` function checks if interval is already running, and if so, stops the interval and clears the reference to its id, so that a new interval can be scheduled again with \`handleStart\` function.
- \`handleReset\` function simply resets the counter to default state.

\`useEffect\` hook is used to cleanup running interval after component unmounts to prevent memory leaks.`,
      },
      source: {
        code: UseRefStoringIntervalIdSourceCode,
      },
    },
  },
}

export const UseStateStoringIntervalIdStory: StoryObj = {
  name: 'useState storing interval id',
  render: () => {
    return <UseStateStoringIntervalId />
  },
  parameters: {
    docs: {
      description: {
        story: `This solution is more difficult to implement because it requires to memoize functions that manage interval state.

- \`handleStart\` function first checks whether an interval has already been started, which prevents an infinite number of intervals from being started. If the interval hasn't been started yet, it starts the interval and stores its id using state.
- \`handleStop\` function checks if interval is already running, and if so, stops the interval and resets intervalId state to default value (i.e. \`null\`), so that a new interval can be scheduled again with \`handleStart\` function.
- \`handleReset\` function simply resets the counter to default state.

\`useEffect\` hook is used to cleanup running interval after component unmounts to prevent memory leaks.`,
      },
      source: {
        code: UseStateStoringIntervalIdSourceCode,
      },
    },
  },
}
