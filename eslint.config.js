import js from "@eslint/js";
import fn from "eslint-plugin-functional";
import tsParser from "@typescript-eslint/parser";

let blah = 5;
blah = 6;

export default [
  {
    ...js.configs.all,
    ...fn.configs.strict,

    rules: {
      // semi: "error",
      //"prefer-const": "error",
    },
  },
  // Later objects override the previous ones
];

// This might be needed for TS/JSX/TSX:
// languageOptions: {
//   sourceType: "script";
// }

// import babelParser from "@babel/eslint-parser";
//
// export default [
//     {
//         files: ["**/*.js", "**/*.mjs"],
//         languageOptions: {
//             parser: babelParser
//         }
//     }
// ];
//
//
// import babelParser from "@babel/eslint-parser";
//
// export default [
//     {
//         files: ["**/*.js", "**/*.mjs"],
//         languageOptions: {
//             parser: babelParser,
//             parserOptions: {
//                 requireConfigFile: false,
//                 babelOptions: {
//                     babelrc: false,
//                     configFile: false,
//                     // your babel options
//                     presets: ["@babel/preset-env"],
//                 }
//             }
//         }
//     }
// ];
//
//
// import globals from "globals";
// export default [
//     {
//         languageOptions: {
//             globals: {
//                 ...globals.browser
//             }
//         }
//     }
// ];
//
// import jsdoc from "eslint-plugin-jsdoc";
//
// export default [
//     {
//         files: ["**/*.js"],
//         plugins: {
//             jsdoc: jsdoc
//         },
//         rules: {
//             "jsdoc/require-description": "error",
//             "jsdoc/check-values": "error"
//         }
//     }
// ];
//
//
//import jsdoc from "eslint-plugin-jsdoc";
//
// export default [
//     // configuration included in plugin
//     jsdoc.configs["flat/recommended"],
//     // other configuration objects...
//     {
//         files: ["**/*.js"],
//         plugins: {
//             jsdoc: jsdoc
//         },
//         rules: {
//             "jsdoc/require-description": "warn",
//         }
//     }
// ];
//
//
//
// import js from "@eslint/js";
//
// export default [
//     js.configs.recommended,
//     {
//         rules: {
//             semi: ["warn", "always"]
//         }
//     }
// ];
//
// import js from "@eslint/js";
//
// export default [
//     {
//         files: ["**/src/safe/*.js"],
//         ...js.configs.recommended
//     }
// ];
