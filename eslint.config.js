// @ts-check

import eslint from "@eslint/js";
import functional from "eslint-plugin-functional";
import tseslint from "typescript-eslint";
import globals from "globals";
import react from "@eslint-react/eslint-plugin";

export default tseslint.config(
  {
    ignores: [
      "**/dist/**",
      "**/@/**",
      "**/components/ui/**",
      "**/lib/**",
      "**/*.config.{js,ts}",
      "**/*.d.ts",
      "**/tests/**",
    ],
  },

  eslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      functional.configs.lite,
      react.configs["recommended-type-checked"],
    ],
    languageOptions: {
      parserOptions: { projectService: true },
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
    },
  },
);
