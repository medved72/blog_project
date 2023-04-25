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
        tsconfigRootDir: '.',
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', 'i18next', 'blog-project-plugin', 'unused-imports'],
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
        '@typescript-eslint/no-floating-promises': ['off'],
        '@typescript-eslint/no-redeclare': ['off'],
        'blog-project-plugin/path-checker': ['error', { alias: '@' }],
        'unused-imports/no-unused-imports': ['error'],
        'blog-project-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.ts',
                    '**/*.stories.ts',
                    '**/StoreDecorator.tsx',
                    '**/TestsProvidersWrapper.tsx',
                ],
            },
        ],
        'blog-project-plugin/import-levels': [
            'error',
            {
                alias: '@',
                ignorePatterns: [
                    '**/generateAppStories.tsx',
                    '**/StoreDecorator.tsx',
                    '**/StyleDecorator.ts',
                    '**/ThemeDecorator.tsx',
                    '**/ThemeProviderDecorator.tsx',
                    '**/**.test.ts',
                    '**/**.test.tsx',
                    '**/**.stories.tsx',
                    '**/TestsProvidersWrapper.tsx',
                    '**/mockAxios.ts',
                ],
            },
        ],
        'blog-project-plugin/import-order': [
            'error',
            {
                groups: [
                    { name: 'react', match: 'react', order: 10 },
                    {
                        name: 'shared layer',
                        match: '@/shared/**',
                        order: 35,
                    },
                    {
                        name: 'entities layer',
                        match: '@/entities/**',
                        order: 34,
                    },
                    {
                        name: 'features layer',
                        match: '@/features/**',
                        order: 33,
                    },
                    {
                        name: 'widgets layer',
                        match: '@/widgets/**',
                        order: 32,
                    },
                    {
                        name: 'processes layer',
                        match: '@/processes/**',
                        order: 31,
                    },
                    { name: 'app layer', match: '@/app/**', order: 30 },
                    {
                        name: 'styles',
                        match: '**/*.scss',
                        order: 50,
                    },
                    {
                        name: 'relative imports',
                        match: '(..|.)/**',
                        order: 40,
                    },
                    { name: 'packages', match: '**', order: 20 },
                ],
            },
        ],
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
                'i18next/no-literal-string': ['off'],
            },
        },
        {
            files: [
                './config/**',
                './scripts/**',
                './vite.config.ts',
                './webpack.config.ts',
            ],
            rules: {
                'blog-project-plugin/import-order': ['off'],
                'blog-project-plugin/import-levels': ['off'],
                'blog-project-plugin/path-checker': ['off'],
                'blog-project-plugin/public-api-imports': ['off'],
            },
        },
    ],
}
