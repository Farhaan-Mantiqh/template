import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: [
      "eslint.config.mjs",
      "next.config.mjs",
      "postcss.config.mjs",
      "tailwind.config.ts",
      "out/",
      "node_modules/",
    ],
  },

  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
    ],
    plugins: ["unused-imports"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars":"error"
      //  [
        // "",
        // {
        //   vars: "all",
        //   varsIgnorePattern: "^_",
        //   args: "after-used",
        //   argsIgnorePattern: "^_",
        // },
      // ],
    },
  }),
];
