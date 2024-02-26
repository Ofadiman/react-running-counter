import { Meta } from '@storybook/react'
// import { StoryBlock } from '../useRenderCount/StoryCode'
import mdx from './useRenderCount.mdx'

const meta = {
  title: 'Hooks/useRenderCount',
  // render: StoryBlock,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} satisfies Meta

export default meta

export const D = {}
