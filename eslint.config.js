import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        ignores: ["dist/**", "**/*.d.ts"],
    },

    // Javascript
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        rules: {
            "no-unused-vars": "error",
        },
    },

    // Typescript
    tseslint.configs.recommended,

    // Prettier
    {
        plugins: {
            prettier: prettier,
        },
        rules: {
            "prettier/prettier": "off", // prettier should format on save
        },
    },

    // Astro
    ...astro.configs.recommended,
]);
