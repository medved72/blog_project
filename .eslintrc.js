module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react-hooks/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', 'i18next'],
    rules: {
        'max-len': ['error', 120],
        'react/react-in-jsx-scope': ['off'],
        'react/prop-types': ['off'],
        '@typescript-eslint/no-misused-promises': ['off'],
        '@typescript-eslint/strict-boolean-expressions': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        '@typescript-eslint/consistent-type-assertions': ['off'],
        'i18next/no-literal-string': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/no-invalid-void-type': ['off'],
        'storybook/story-exports': ['off'],
        'storybook/default-exports': ['off'],
        'n/no-callback-literal': ['off'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: '**/**.d.ts',
            rules: {
                '@typescript-eslint/consistent-type-imports': ['off'],
            },
        },
        {
            files: ['**/**.test.ts', '**/**.test.tsx'],
            rules: {
                'prefer-promise-reject-errors': ['off'],
            },
        },
    ],
}
