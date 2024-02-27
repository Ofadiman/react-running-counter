import type { Meta, StoryObj } from '@storybook/react'
import { Counter as UseRefStoringIntervalId } from './UseRefStoringIntervalId'
import UseRefStoringIntervalIdSourceCode from './UseRefStoringIntervalId?raw'
import { Counter as UseEffectSchedulingInterval } from './UseEffectSchedulingInterval'
import UseEffectSchedulingIntervalSourceCode from './UseEffectSchedulingInterval?raw'
import { Counter as HandleStartFunctionSchedulingTimeoutRecursively } from './HandleStartFunctionSchedulingTimeoutRecursively'
import HandleStartFunctionSchedulingTimeoutRecursivelySourceCode from './HandleStartFunctionSchedulingTimeoutRecursively?raw'
import { Counter as UseEffectSchedulingTimeoutRecursively } from './UseEffectSchedulingTimeoutRecursively'
import UseEffectSchedulingTimeoutRecursivelySourceCode from './UseEffectSchedulingTimeoutRecursively?raw'
import { Counter as RequestAnimationFrameCheckingElapsedTime } from './RequestAnimationFrameCheckingElapsedTime'
import RequestAnimationFrameCheckingElapsedTimeSourceCode from './RequestAnimationFrameCheckingElapsedTime?raw'

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
        story: `In this solution, \`handleStart\` function checks if the interval is already scheduled and if not, it schedules a new interval. \`handleStop\` function clears the interval and sets the references to its id to \`null\` so that it is possible to schedule a new interval using \`handleStart\` later. \`useEffect\` is responsible for clearing interval after the component unmounts.`,
      },
      source: {
        code: UseRefStoringIntervalIdSourceCode,
      },
    },
  },
}

export const UseEffectSchedulingIntervalStory: StoryObj = {
  name: 'useEffect scheduling interval',
  render: () => {
    return <UseEffectSchedulingInterval />
  },
  parameters: {
    docs: {
      description: {
        story: `In this solution, \`handleStart\` and \`handleStop\` functions toggle between start/stop state causing \`useEffect\` to run. Function passed to \`useEffect\` schedules interval if the state is set to running and returns a cleanup function which will clear the interval after the component unmounts or changes state to not running.`,
      },
      source: {
        code: UseEffectSchedulingIntervalSourceCode,
      },
    },
  },
}

export const UseEffectSchedulingTimeoutRecursivelyStory: StoryObj = {
  name: 'useEffect scheduling timeout recursively',
  render: () => {
    return <UseEffectSchedulingTimeoutRecursively />
  },
  parameters: {
    docs: {
      description: {
        story: `In this solution, \`handleStart\` and \`handleStop\` functions toggle between start/stop state causing \`useEffect\` to run. Function passed to \`useEffect\` schedules timeout recursively if the state is set to running and returns a cleanup function which will clear the timeout after the component unmounts or changes state to not running.`,
      },
      source: {
        code: UseEffectSchedulingTimeoutRecursivelySourceCode,
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
        story: `This solution relies on the fact that the function \`handleStart\` is called recursively running a timeout on each execution. The \`handleStop\` function clears the timeout and sets the references to its id to \`null\` so that it is possible to schedule a new timeout using \`handleStart\` later. \`useEffect\` is responsible for clearing timeout after the component unmounts.`,
      },
      source: {
        code: HandleStartFunctionSchedulingTimeoutRecursivelySourceCode,
      },
    },
  },
}

export const RequestAnimationFrameStory: StoryObj = {
  name: 'requestAnimationFrame checking elapsed time',
  render: () => {
    return <RequestAnimationFrameCheckingElapsedTime />
  },
  parameters: {
    docs: {
      description: {
        story: `In this solution, \`window.requestAnimationFrame\` API is used to invoke a function responsible for incrementing counter approximately every 16 ms. The \`handleStart\` function sets the timestamp when checks if 1 second elapsed start and calls \`checkTime\` using \`window.requestAnimationFrame\` API. The \`checkTime\` function then checks if 1 second elapsed, and if so, updates the timestamp and counter state, and calls itself recursively using \`window.requestAnimationFrame\` API. \`handleStop\` function cancels animation frame and resets the timestamp when checks has started. \`useEffect\` is used to cancel animation frame after component unmounts, thus stopping the checks.`,
      },
      source: {
        code: RequestAnimationFrameCheckingElapsedTimeSourceCode,
      },
    },
  },
}
