// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
// @ts-ignore
import jsxA11y from "eslint-plugin-jsx-a11y";
// @ts-ignore
import tailwindcss from "eslint-plugin-tailwindcss";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.configs.strict,
  ...tailwindcss.configs["flat/recommended"],
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/prefer-const": "error",

      // Stylistic rules
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/indent": ["error", "tab"],
      "@stylistic/space-in-parens": ["error", "always"],
      "@stylistic/array-bracket-spacing": ["error", "always"],
      "@stylistic/object-curly-spacing": ["error", "always"],

      // Tailwind rules
      "tailwindcss/classnames-order": "error",
      "tailwindcss/no-custom-classname": "warn",

      // Accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      // Astro-specific overrides
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    ignores: ["dist/", "node_modules/", ".astro/", "**/*.d.ts"],
  }
);
