import type { Meta, StoryObj } from '@storybook/react'
import { Foo } from './Foo'
import fooSourceCode from './Foo?raw'
import { Bar } from './Bar'
import barSourceCode from './Bar?raw'

export default {
  title: 'Foo',
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
} satisfies Meta<typeof Foo>

export const Solution: StoryObj<typeof Foo> = {
  render: () => {
    return <Foo />
  },
  parameters: {
    docs: {
      source: {
        code: fooSourceCode,
      },
    },
  },
}

export const SolutionTwo: StoryObj = {
  render: () => {
    return <Bar />
  },
  parameters: {
    docs: {
      source: {
        code: barSourceCode,
      },
    },
  },
}
