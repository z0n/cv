module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'import'],
    rules: {
        'prettier/prettier': 'error',
    },
    ignorePatterns: ['node_modules/', 'public/', 'graphql-types.ts', '*.css.d.ts'],
    settings: {
        react: {
            version: 'detect',
        },
    },
}
