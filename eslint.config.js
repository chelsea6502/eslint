import js from "@eslint/js";
import fn from "eslint-plugin-functional/flat";
import ts from "typescript-eslint";
import react from "eslint-plugin-react/configs/all.js";
import globals from "globals";
// react-perf
// total-functions
// typed-fp

export default ts.config(
  js.configs.all,
  fn.configs.all,
  react,
  ...ts.configs.strictTypeChecked,
  {
    languageOptions: {
      ...react.languageOptions,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.browser },
    },
    rules: {
      "functional/prefer-immutable-types": "off",
    },
  },
);
