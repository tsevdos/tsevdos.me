import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  {
    ignores: ["**/public/*", "**/dist/*", "**/.astro/*"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.astro"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      "jsx-a11y/alt-text": "error",
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
