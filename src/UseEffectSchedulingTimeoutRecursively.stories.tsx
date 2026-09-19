import type { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from "./UseEffectSchedulingTimeoutRecursively";
import sourceCode from "./UseEffectSchedulingTimeoutRecursively?raw";

export default {
  title: "useEffect scheduling timeout recursively",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        component: `In this solution, \`handleStart\` and \`handleStop\` functions toggle between start/stop state causing \`useEffect\` to run. Function passed to \`useEffect\` schedules timeout recursively if the state is set to running and returns a cleanup function which will clear the timeout after the component unmounts or changes state to not running.`,
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
