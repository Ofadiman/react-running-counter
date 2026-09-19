import type { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from "./HandleStartFunctionSchedulingTimeoutRecursively";
import sourceCode from "./HandleStartFunctionSchedulingTimeoutRecursively?raw";

export default {
  title: "handleStart function scheduling timeout recursively",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        component: `This solution relies on the fact that the function \`handleStart\` is called recursively running a timeout on each execution. The \`handleStop\` function clears the timeout and sets the references to its id to \`null\` so that it is possible to schedule a new timeout using \`handleStart\` later. \`useEffect\` is responsible for clearing timeout after the component unmounts.`,
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
