import type { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from "./UseSyncExternalStoreSchedulingInterval";
import sourceCode from "./UseSyncExternalStoreSchedulingInterval?raw";

export default {
  title: "useSyncExternalStore scheduling interval",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        component: `In this solution, all the logic for scheduling interval is abstracted away to \`CounterStore\` class (i.e. \`external store\`) and \`useSyncExternalStore\` hook is used to subscribe to the store and retrive the counter value. From a logical point of view, this solution is the same as the solution with the interval scheduled by \`useEffect\`, but uses a different React API.`,
      },
    },
  },
} satisfies Meta<typeof Counter>;

export const CounterStory: StoryObj<typeof Counter> = {
  name: "Counter",
  parameters: {
    docs: {
      source: {
        code: sourceCode,
      },
    },
  },
};
