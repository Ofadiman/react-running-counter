import type { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from "./UseRefStoringIntervalId";
import sourceCode from "./UseRefStoringIntervalId?raw";

export default {
  title: "useRef storing interval id",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        component: `In this solution, \`handleStart\` function checks if the interval is already scheduled and if not, it schedules a new interval. \`handleStop\` function clears the interval and sets the references to its id to \`null\` so that it is possible to schedule a new interval using \`handleStart\` later. \`useEffect\` is responsible for clearing interval after the component unmounts.`,
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
