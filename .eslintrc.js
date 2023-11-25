module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        semi: ['error', 'never'],
        indent: ['error', 2],
        // quotes: ['error', 'single'],
    },
    // "include": ["src"],
};
