import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  // Only apply type-aware rules to TS files
  {
    files: ["**/*.ts"],
    plugins: { "simple-import-sort": simpleImportSort },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.node,
    },
    rules: {
      // Type-aware rules
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/require-await": "warn",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  // General backend rules (safe for all files)
  {
    files: ["**/*.{js,ts}"],
    plugins: { "simple-import-sort": simpleImportSort },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "no-duplicate-imports": "off", // disable because simple-import-sort handles this
      "no-unreachable": "error",

      // Import sorting
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
