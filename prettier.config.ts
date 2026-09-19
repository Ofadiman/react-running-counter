import { type Config } from "prettier";

export default {
  proseWrap: "never",
  overrides: [
    {
      files: ["*.md"],
      options: {
        printWidth: 1024,
      },
    },
  ],
} satisfies Config;
