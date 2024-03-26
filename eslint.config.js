import js from "@eslint/js";
import fn from "eslint-plugin-functional/flat";
import ts from "typescript-eslint";
// @ts-expect-error: React isn't typed yet
import react from "eslint-plugin-react/configs/all.js";
import globals from "globals";
/*
 * Future plugins:
 * total-functions
 * promises?
 * next.js? graphql?
 * tailwind?
 * react-testing-library?
 */

export default ts.config(
  js.configs.all,
  fn.configs.all,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  react,
  ...ts.configs.strictTypeChecked,
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    languageOptions: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...react.languageOptions,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.browser },
    },
    settings: { react: { version: "detect" } },
    rules: {
      "sort-imports": "off",
      "sort-keys": "off",
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
