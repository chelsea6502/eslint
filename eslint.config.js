import js from "@eslint/js";
import fn from "eslint-plugin-functional/flat";
import ts from "typescript-eslint";
import globals from "globals";
// @ts-expect-error: React plugin isn't typed
import reactConfig from "eslint-plugin-react/configs/all.js";
// TODO: nextjs

export default ts.config(
  js.configs.all,
  fn.configs.all,
  ...ts.configs.strictTypeChecked,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...reactConfig,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    languageOptions: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...reactConfig.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    settings: { react: { version: "detect" } },
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.browser },
    },
    rules: {
      "react/jsx-indent": "off",
      "react/jsx-filename-extension": [
        "off",
        {
          extensions: [".tsx"],
        },
      ],

      // Incompatible react plugins
      "react/require-render-return": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-string-refs": "off",
      "react/display-name": "off",
      "react/no-direct-mutation-state": "off",
      "react/prop-types": "off",
      "react/destructuring-assignment": "off",
      "react/jsx-no-bind": "off",
      "react/no-access-state-in-setstate": "off",
      "react/no-unstable-nested-components": "off",
      "react/require-optimization": "off",
      "react/boolean-prop-naming": "off",
      "react/prefer-stateless-function": "off",
      "react/jsx-fragments": "off",
      "react/default-props-match-prop-types": "off",
      "react/function-component-definition": "off",
      "react/hook-use-state": "off",
      "react/jsx-no-constructed-context-values": "off",
      "react/no-arrow-function-lifecycle": "off",
      "react/no-multi-comp": "off",
      "react/no-set-state": "off",
      "react/no-this-in-sfc": "off",
      "react/no-typos": "off",
      "react/no-unused-prop-types": "off",
      "react/no-object-type-as-default-prop": "off",
      "react/prefer-exact-props": "off",
      "react/prefer-read-only-props": "off",
      "react/require-default-props": "off",
      "react/sort-comp": "off",
      "react/static-property-placement": "off",

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
