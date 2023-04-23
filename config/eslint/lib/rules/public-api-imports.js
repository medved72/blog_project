/**
 * @fileoverview description
 * @author imxx
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const { isPathRelative } = require('../helpers')
// eslint-disable-next-line node/no-extraneous-require
const micromatch = require('micromatch')

const { layers } = require('../constants')
const path = require('path')
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
        type: null,
        docs: {
            description: 'description',
            recommended: false,
            url: null,
        },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: {
                    alias: { type: 'string' },
                    testFilePatters: {
                        type: 'array',
                    },
                },
            },
        ],
    },

    create(context) {
        const { alias = '', testFilesPatterns = [] } = context.options[0] ?? {}

        const checkingLayers = { ...layers }
        delete checkingLayers['shared']

        return {
            ImportDeclaration(node) {
                const value = node.source.value
                const importTo = alias ? value.replace(`${alias}/`, '') : value

                if (isPathRelative(importTo)) {
                    return
                }

                // [entities, article, model, types]
                const segments = importTo.split('/')
                const layer = segments[0]

                if (!checkingLayers[layer]) {
                    return
                }

                const isImportNotFromPublicApi = segments.length > 2
                // [entities, article, testing]
                const isTestingPublicApi =
                    segments[2] === 'testing' && segments.length < 4

                if (isImportNotFromPublicApi && !isTestingPublicApi) {
                    context.report(
                        node,
                        'Абсолютный импорт разрешен только из Public API'
                    )
                }

                if (isTestingPublicApi) {
                    const currentFilePath = context.getFilename()
                    const normalizedPath =
                        path.toNamespacedPath(currentFilePath)

                    const isCurrentFileTesting = testFilesPatterns.some(
                        (pattern) => micromatch.isMatch(normalizedPath, pattern)
                    )

                    if (!isCurrentFileTesting) {
                        context.report(
                            node,
                            'Тестовые данные необходимо импортировать из Public API (testing.ts)'
                        )
                    }
                }
            },
        }
    },
}
