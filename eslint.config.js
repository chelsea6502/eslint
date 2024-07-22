import js from "@eslint/js";
import fn from "eslint-plugin-functional/flat";
import ts from "typescript-eslint";
import globals from "globals";
import react from "@eslint-react/eslint-plugin";
// TODO: react, nextjs

export default ts.config(
  js.configs.all,
  fn.configs.all,
  ...ts.configs.strictTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    ...react.configs["recommended-type-checked"],
  },
  { files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"] },
  {
    languageOptions: {
      parserOptions: { project: true, tsconfigRootDir: import.meta.dirname },
      globals: { ...globals.browser },
    },
    rules: {
      "react/jsx-indent": "off",
      "react/jsx-filename-extension": ["off", { extensions: [".tsx"] }],

      // Custom rule configs from the 'typed-fp' plugin
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        { assertionStyle: "never" },
      ],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        { allowString: false, allowNumber: false, allowNullableObject: false },
      ],
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            Omit: { message: "Omit is not type-safe." },
            Exclude: { message: "Exclude is not type-safe." },
            Extract: { message: "Extract is not type-safe." },
          },
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      // TypeScript-specific rules
      "@typescript-eslint/prefer-readonly-parameter-types": "warn",
      "@typescript-eslint/sort-type-constituents": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-magic-numbers": "off",

      // Functional programming rules
      "functional/immutable-data": "warn",
      "functional/no-conditional-statements": [
        "warn",
        { allowReturningBranches: true },
      ],
      "functional/no-expression-statements": [
        "warn",
        { ignoreCodePattern: "^set|use|createRoot" },
      ],
      "functional/no-return-void": "warn",
      "functional/readonly-type": "warn",
      "functional/type-declaration-immutability": [
        // TODO: get this to work
        "off",
        { ignoreIdentifierPattern: "^z\\.infer" },
      ],
      // TODO: get this to work
      "functional/prefer-immutable-types": "off",
      "functional/prefer-tacit": "warn",
      // TODO: get this to work
      "functional/functional-parameters": "off",

      // General JavaScript rules
      "arrow-body-style": "warn",
      camelcase: "warn",
      "capitalized-comments": "warn",
      "id-length": "warn",
      "max-statements": "warn",
      "no-inline-comments": "warn",
      "no-undefined": "warn",
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "no-shadow": "off",
      "max-lines-per-function": "off",
      "init-declarations": "off",
      "no-unused-expressions": "off",
      "no-multi-str": "off",
      "max-params": "off",
      "multiline-comment-style": "off",
      "sort-imports": "off",
      "sort-keys": "off",
      "no-ternary": "off",
      "no-magic-numbers": "off",
      "line-comment-position": "off",
      "no-duplicate-imports": "off",
      "sort-vars": "off",
      "no-warning-comments": "off",
      curly: "off",
      "one-var": "off",
      "no-extra-boolean-cast": "off",
      "dot-notation": "off",
    },
  },
);
