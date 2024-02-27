import type { Meta, StoryObj } from '@storybook/react'
import { Counter as UseRefStoringIntervalId } from './UseRefStoringIntervalId'
import UseRefStoringIntervalIdSourceCode from './UseRefStoringIntervalId?raw'
import { Counter as UseEffectSchedulingAndClearingInterval } from './UseEffectSchedulingAndClearingInterval'
import UseEffectSchedulingAndClearingIntervalSourceCode from './UseEffectSchedulingAndClearingInterval?raw'
import { Counter as HandleStartFunctionSchedulingTimeoutRecursively } from './HandleStartFunctionSchedulingTimeoutRecursively'
import HandleStartFunctionSchedulingTimeoutRecursivelySourceCode from './HandleStartFunctionSchedulingTimeoutRecursively?raw'

export default {
  title: 'Correct implementations',
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

export const UseEffectSchedulingAndClearingIntervalStory: StoryObj = {
  name: 'useEffect scheduling and clearing interval',
  render: () => {
    return <UseEffectSchedulingAndClearingInterval />
  },
  parameters: {
    docs: {
      description: {
        story: `This solution implements the logic for scheduling and clearing interval inside useEffect hook.

- \`handleStart\` function starts the counter by setting \`isRunning\` state to \`true\` which triggers useEffect callback to run.
- \`handleStop\` function stops the counter by setting \`isRunning\` state to \`false\` which triggers the function returned from useEffect callback to run which clears interval.
- \`handleReset\` function simply resets the counter to default state.

\`useEffect\` hook is responsible for creating interval and clearing interval on state change and on component unmount.`,
      },
      source: {
        code: UseEffectSchedulingAndClearingIntervalSourceCode,
      },
    },
  },
}

export const HandleStartFunctionSchedulingTimeoutRecursivelyStory: StoryObj = {
  name: 'handleStart function scheduling timeout recursively',
  render: () => {
    return <HandleStartFunctionSchedulingTimeoutRecursively />
  },
  parameters: {
    docs: {
      description: {
        story: ``,
      },
      source: {
        code: HandleStartFunctionSchedulingTimeoutRecursivelySourceCode,
      },
    },
  },
}
