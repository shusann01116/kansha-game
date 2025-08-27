import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginNext from "@next/eslint-plugin-next";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig, globalIgnores } from "eslint/config";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import pluginEslintPrettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
  globalIgnores([
    "**/dist/**",
    "**/node_modules/**",
    "**/build/**",
    "**/.next/**",
    "**/.claude/**",
    "**/CLAUDE.md",
    "**/next-env.d.ts",
  ]),
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: "readonly",
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint.plugin,
      "@next/next": pluginNext,
    },
    extends: [...tseslint.configs.recommendedTypeChecked],
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat["jsx-runtime"].rules,
      ...pluginNext.configs.recommended.rules,
      "@typescript-eslint/unbound-method": "off",
    },
  },
  {
    files: ["src/**/*.stories.{js,jsx,ts,tsx}"],
    extends: [...storybook.configs["flat/recommended"]],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  pluginEslintPrettier,
]);
