import { type Config } from "prettier";

export default {
  objectWrap: "collapse",
  proseWrap: "never",
  overrides: [{ files: ["*.md"], options: { printWidth: 1024 } }],
} satisfies Config;
