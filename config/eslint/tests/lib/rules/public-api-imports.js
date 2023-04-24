/**
 * @fileoverview description
 * @author imxx
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/public-api-imports'),
    RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const aliasOptions = [
    {
        alias: '@',
    },
]

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
})

ruleTester.run('public-api-imports', rule, {
    valid: [
        {
            code: "import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'",
            errors: [],
        },
        {
            code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article'",
            errors: [],
            options: aliasOptions,
        },
        {
            filename: 'C:\\project\\src\\entities\\file.test.ts',
            code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/testing'",
            errors: [],
            options: [
                {
                    alias: '@',
                    testFilesPatterns: [
                        '**/*.test.ts',
                        '**/*.test.ts',
                        '**/StoreDecorator.tsx',
                    ],
                },
            ],
        },
        {
            filename: 'C:\\project\\src\\entities\\StoreDecorator.tsx',
            code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/testing'",
            errors: [],
            options: [
                {
                    alias: '@',
                    testFilesPatterns: [
                        '**/*.test.ts',
                        '**/*.test.ts',
                        '**/StoreDecorator.tsx',
                    ],
                },
            ],
        },
    ],

    invalid: [
        {
            code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/model/file.ts'",
            errors: [
                {
                    message: 'Абсолютный импорт разрешен только из Public API',
                },
            ],
            options: aliasOptions,
            output: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article'",
        },
        {
            filename: 'C:\\project\\src\\entities\\StoreDecorator.tsx',
            code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/testing/file.tsx'",
            errors: [
                {
                    message: 'Абсолютный импорт разрешен только из Public API',
                },
            ],
            options: [
                {
                    alias: '@',
                    testFilesPatterns: [
                        '**/*.test.ts',
                        '**/*.test.ts',
                        '**/StoreDecorator.tsx',
                    ],
                },
            ],
            output: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article'",
        },
        {
            filename: 'C:\\project\\src\\entities\\forbidden.ts',
            code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/testing'",
            errors: [
                {
                    message:
                        'Тестовые данные необходимо импортировать из Public API (testing.ts)',
                },
            ],
            options: [
                {
                    alias: '@',
                    testFilesPatterns: [
                        '**/*.test.ts',
                        '**/*.test.ts',
                        '**/StoreDecorator.tsx',
                    ],
                },
            ],
            output: null,
        },
    ],
})
