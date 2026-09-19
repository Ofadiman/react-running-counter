import { useState } from "react";
import type { Preview } from "@storybook/react-vite";

export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const [isMounted, setIsMounted] = useState(true);

      return (
        <div>
          <div>
            <button onClick={() => setIsMounted(true)}>Mount</button>
            <button onClick={() => setIsMounted(false)}>Unmount</button>
          </div>
          {isMounted && <Story />}
        </div>
      );
    },
  ],
} satisfies Preview;
