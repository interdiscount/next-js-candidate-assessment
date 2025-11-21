import { dirname } from "node:path";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import next from "@next/eslint-plugin-next";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { "@next/next": next },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TypeScript - relaxed to warnings (let candidates make their own choices)
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      // Only error on actual problems
      "no-console": "warn",

      // Prettier integration
      "prettier/prettier": "error",
    },
  },
  {
    files: [
      "**/page.tsx",
      "**/layout.tsx",
      "**/route.ts",
      "**/loading.tsx",
      "**/not-found.tsx",
      "**/*.config.*",
      "**/error.tsx",
      "**/global-error.tsx",
    ],
    rules: {
      "import/no-default-export": "off",
    },
  },
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];
