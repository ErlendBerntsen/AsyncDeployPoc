// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["dist/**", "build/**", "coverage/**", "node_modules/**", "tsconfig.json"],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript (no type-aware rules by default; fast + good defaults)
  ...tseslint.configs.recommended,

  // Disable rules that conflict with Prettier
  prettier,

  // Project-specific tweaks
  {
    rules: {
      // Reasonable defaults
      "no-console": "off",
      "no-debugger": "warn",

      // TS-specific adjustments
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
    },
  },
];
