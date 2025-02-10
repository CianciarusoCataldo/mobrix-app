import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "build",
      "public",
      "config",
      "out",
      "*.config.js",
    ],
  },
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "no-console": "warn",

      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external", "internal"],
            "parent",
            "sibling",
            "index",
          ],
          alphabetize: {
            order: "asc", // "asc" per ordine crescente
            caseInsensitive: true, // Se vuoi ignorare la differenza tra maiuscole e minuscole
          },
        },
      ],
      "import/no-anonymous-default-export": "off", // Disabilita il controllo per le esportazioni anonime
    },
  },
];
