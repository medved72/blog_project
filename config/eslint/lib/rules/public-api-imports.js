'use strict'

const { isPathRelative } = require('../helpers')
const micromatch = require('micromatch')

const { layers } = require('../constants')
const path = require('path')

const PUBLIC_API = 'PUBLIC_API'

const TESTING_PUBLIC_API = 'TESTING_PUBLIC_API'

module.exports = {
    meta: {
        type: null,
        docs: {
            description: 'description',
            recommended: false,
            url: null,
        },
        messages: {
            [PUBLIC_API]: 'Абсолютный импорт разрешен только из Public API',
            [TESTING_PUBLIC_API]:
                'Тестовые данные необходимо импортировать из Public API (testing.ts)',
        },
        fixable: 'code',
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

                const segments = importTo.split('/')
                const layer = segments[0]

                if (!checkingLayers[layer]) {
                    return
                }

                const isImportNotFromPublicApi = segments.length > 2

                const isTestingPublicApi =
                    segments[2] === 'testing' && segments.length < 4

                if (isImportNotFromPublicApi && !isTestingPublicApi) {
                    context.report({
                        node,
                        messageId: PUBLIC_API,
                        fix: (fixer) => {
                            return fixer.replaceText(
                                node.source,
                                `'${alias}/${segments[0]}/${segments[1]}'`
                            )
                        },
                    })
                }

                if (isTestingPublicApi) {
                    const currentFilePath = context.getFilename()
                    const normalizedPath =
                        path.toNamespacedPath(currentFilePath)

                    const isCurrentFileTesting = testFilesPatterns.some(
                        (pattern) => micromatch.isMatch(normalizedPath, pattern)
                    )

                    if (!isCurrentFileTesting) {
                        context.report({
                            node,
                            messageId: TESTING_PUBLIC_API,
                            fix: (fixer) => {
                                return fixer.replaceText(
                                    node.source,
                                    `'${alias}/${segments[0]}/${segments[1]}/testing'`
                                )
                            },
                        })
                    }
                }
            },
        }
    },
}
