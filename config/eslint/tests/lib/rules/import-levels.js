/**
 * @fileoverview description
 * @author imxx
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/import-levels'),
    RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const layers = [
    'app',
    'processes',
    'pages',
    'widgets',
    'features',
    'entities',
    'shared',
]

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
})
ruleTester.run('import-levels', rule, {
    valid: layers
        .flatMap((currentLayer, indexCurrent) => {
            return layers.flatMap((importLayer, indexLayer) => {
                const result = []
                if (indexCurrent < indexLayer) {
                    result.push({
                        filename: `C:\\project\\src\\${currentLayer}\\segment\\index.ts`,
                        code: `import {Something} from "${importLayer}/segment/index.ts"`,
                        errors: [],
                        options: [{ alias: '@' }],
                    })
                }
                return result
            })
        })
        .concat([
            {
                filename: `D:\\projects\\blog_project\\src\\features\\AddArticleCommentForm\\ui\\AddArticleCommentForm\\AddArticleCommentForm.tsx`,
                code: "import { getAddArticleCommentFormLoading } from '../../model/selectors/getAddArticleCommentFormLoading'",
                errors: [],
                options: [{ alias: '@' }],
            },
            {
                filename: `D:\\projects\\blog_project\\src\\features\\AddArticleCommentForm\\ui\\AddArticleCommentForm\\AddArticleCommentForm.tsx`,
                code: "import { FC, memo, useCallback } from 'react'",
                errors: [],
                options: [{ alias: '@' }],
            },
            {
                filename: `D:\\projects\\blog_project\\src\\shared\\config\\storybook\\generateAppStories.tsx`,
                code: "import { capitalize } from '@/shared/lib/capitalize'",
                errors: [],
                options: [
                    {
                        alias: '@',
                        ignorePatterns: ['**/generateAppStories.tsx'],
                    },
                ],
            },
        ]),

    invalid: layers.flatMap((currentLayer, indexCurrent) => {
        return layers.flatMap((importLayer, indexLayer) => {
            const result = []
            if (indexCurrent >= indexLayer) {
                result.push({
                    filename: `C:\\project\\src\\${currentLayer}\\segment\\index.ts`,
                    code: `import {Something} from "${importLayer}/segment/index.ts"`,
                    errors: [
                        {
                            message:
                                'Импортировать со слоя выше или того же слоя запрещено архитектурой',
                        },
                    ],
                    options: [{ alias: '@' }],
                })
            }
            return result
        })
    }),
})
