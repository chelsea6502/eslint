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
  ...ts.configs.strictTypeChecked,
  ...react,
  {
    languageOptions: {
      ...react.languageOptions,
      globals: { ...globals.browser },
    },
  },
);
