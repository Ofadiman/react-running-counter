import React, { Fragment, useState } from 'react'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const [isMounted, setIsMounted] = useState(true)

      return (
        <Fragment>
          <div>
            <button className="button-20" onClick={() => setIsMounted(true)}>
              Mount
            </button>
            <button className="button-20" onClick={() => setIsMounted(false)}>
              Unmount
            </button>
          </div>
          {isMounted && <Story />}
        </Fragment>
      )
    },
  ],
}

export default preview
