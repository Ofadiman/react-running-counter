import type { Meta, StoryObj } from '@storybook/react'
import { Counter as UseStateStoringIntervalId } from './UseStateStoringIntervalId'
import UseStateStoringIntervalIdSourceCode from './UseStateStoringIntervalId?raw'
import { Counter as UseEffectSchedulingTimeoutRerunningOnCountChange } from './UseEffectSchedulingTimeoutRerunningOnCountChange'
import UseEffectSchedulingTimeoutRerunningOnCountChangeSourceCode from './UseEffectSchedulingTimeoutRerunningOnCountChange?raw'

export default {
  title: 'Incorrect implementations',
  tags: ['autodocs'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
} satisfies Meta

export const UseStateStoringIntervalIdStory: StoryObj = {
  name: 'useState storing interval id',
  render: () => {
    return <UseStateStoringIntervalId />
  },
  parameters: {
    docs: {
      description: {
        story: `Implementation that is using \`useState\` hook for storing interval id is not possible. This happens because after the component is rendered, the user can click the button very quickly many times, and we are unable to prevent starting multiple intervals because the state will not have time to update.`,
      },
      source: {
        code: UseStateStoringIntervalIdSourceCode,
      },
    },
  },
}

export const UseEffectSchedulingTimeoutRerunningOnCountChangeStory: StoryObj = {
  name: 'useEffect scheduling timeout and re-running on count change',
  render: () => {
    return <UseEffectSchedulingTimeoutRerunningOnCountChange />
  },
  parameters: {
    docs: {
      description: {
        story: `In this solution, \`handleStart\` and \`handleStop\` functions toggle between start/stop state causing \`useEffect\` to run. Additionally, \`useEffect\` will be re-run after every \`count\` change which will recursively increment the counter. Cleanup function returned from \`useEffect\` will correctly clear the timeout after the component unmounts. However, this solution has a subtle bug. When \`handleReset\` function is called, it will reset the counter to 0 which will cause the cleanup function from \`useEffect\` to run meaning the current timeout will be cleared and a new timeout will be scheduled. If we reset state after 999 milliseconds passed after scheduling a timeout, we will cancel that timeout and schedule a new timeout without incrementing the counter which breaks the requirement saying that the counter should increment roughly every second.`,
      },
      source: {
        code: UseEffectSchedulingTimeoutRerunningOnCountChangeSourceCode,
      },
    },
  },
}
