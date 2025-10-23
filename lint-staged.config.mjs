/** @type {import('lint-staged').Configuration} */
export default {
    "*": ["prettier . --write"],
    "*.{js,mjs,ts,astro}": ["eslint . --max-warnings=0"],
};
