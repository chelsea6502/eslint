import js from "@eslint/js";
import fn from "eslint-plugin-functional";
import ts from "typescript-eslint";
import globals from "globals";
import react from "@eslint-react/eslint-plugin";

export default ts.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/@/**",
      "**/components/ui/**",
      "**/lib/**",
      "**/*.config.js",
      "**/*.config.ts",
      "**/*.d.ts",
      "**/tests/**",
    ],
  },
  // Use recommended for JavaScript, strict for TypeScript and FP
  js.configs.recommended,
  fn.configs.recommended,
  ...ts.configs.strict,
  ...ts.configs.stylistic,
  {
    files: ["**/*.{ts,tsx}"],
    ...react.configs["recommended-type-checked"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      parserOptions: { 
        project: true, 
        tsconfigRootDir: import.meta.dirname 
      },
      globals: { ...globals.browser },
    },
    rules: {
      // Only essential overrides for your project needs
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      
      // Disable functional programming rules that conflict with React patterns
      "functional/no-expression-statements": "off",
      "functional/no-conditional-statements": "off",
      "functional/no-return-void": "off",
      "functional/functional-parameters": "off",
      "functional/prefer-immutable-types": "off",
      "functional/immutable-data": "off",
      
      // React-specific overrides
      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
    },
  },
);
