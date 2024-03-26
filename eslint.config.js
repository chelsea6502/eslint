import js from "@eslint/js";
import fn from "eslint-plugin-functional/flat";
import ts from "typescript-eslint";
import react from "eslint-plugin-react/configs/all.js";
import globals from "globals";
// total-functions
// promises?
// next.js? graphql?
// tailwind?
// react-testing-library?

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
    settings: { react: { version: "detect" } },
    rules: {
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
    },
  },
);
