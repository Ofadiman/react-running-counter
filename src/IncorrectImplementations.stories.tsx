import type { Meta, StoryObj } from '@storybook/react'
import { Counter as UseStateStoringIntervalId } from './UseStateStoringIntervalId'
import UseStateStoringIntervalIdSourceCode from './UseStateStoringIntervalId?raw'

export default {
  title: 'Incorrect implementations',
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

export const Primary: StoryObj = {}

// WARN: THIS CODE IS BUGGY AND CAN SCHEDULE INTERVAL MULTIPLE TIMES WHEN USER RAGE CLICKS START BUTTON FAST ENOUGH AFTER THE FIRST RENDER.
// for (let i = 0; i < 3; i++) {
//   document.querySelector('button').click()
// }
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
