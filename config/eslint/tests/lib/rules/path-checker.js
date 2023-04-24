'use strict'

const rule = require('../../../lib/rules/path-checker'),
    RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
})
ruleTester.run('path-checker', rule, {
    valid: [
        {
            filename: 'C:\\project\\src\\entities\\Article',
            code: "import {Something} from '../../model/slices/addCommentFormSlice'",
            errors: [],
        },
    ],

    invalid: [
        {
            filename: 'C:\\project\\src\\entities\\Article',
            code: "import {Something} from '@/entities/Article/model/slices/addCommentFormSlice'",
            errors: [
                {
                    message:
                        'В рамках одного слайса все пути должны быть относительными',
                },
            ],
            options: [{ alias: '@' }],
            output: "import {Something} from './model/slices/addCommentFormSlice'",
        },
        {
            filename: 'C:\\project\\src\\entities\\Article',
            code: "import {Something} from 'entities/Article/model/slices/addCommentFormSlice'",
            errors: [
                {
                    message:
                        'В рамках одного слайса все пути должны быть относительными',
                },
            ],
            output: "import {Something} from './model/slices/addCommentFormSlice'",
        },
    ],
})
