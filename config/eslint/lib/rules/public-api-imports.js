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
                'Абсолютный импорт разрешен только из Public API (testing.ts)',
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

                const importTarget = alias
                    ? value.replace(`${alias}/`, '')
                    : value

                const importFrom = context
                    .getFilename()
                    .split(`${path.sep}src${path.sep}`)[1]

                const [targetLayer, targetSlice, ...targetSegments] =
                    importTarget.split('/')

                if (isPathRelative(importTarget) || !layers[targetLayer]) {
                    return
                }

                const isShouldImportFromTestingPublicApi =
                    testFilesPatterns.some((pattern) =>
                        micromatch.isMatch(importFrom, pattern, {
                            contains: true,
                        })
                    )

                const isImportFromTestingPublicApi =
                    targetSegments.length === 1 &&
                    targetSegments[0] === 'testing'

                const isValidImportFromTesting =
                    isShouldImportFromTestingPublicApi &&
                    isImportFromTestingPublicApi

                const isValidImportFromPublic =
                    !isShouldImportFromTestingPublicApi &&
                    targetSegments.length === 0

                const isValidImport =
                    isValidImportFromPublic || isValidImportFromTesting

                if (isValidImport) {
                    return
                }

                if (isShouldImportFromTestingPublicApi) {
                    return context.report({
                        node,
                        messageId: TESTING_PUBLIC_API,
                        fix: (fixer) => {
                            return fixer.replaceText(
                                node.source,
                                `'${alias}/${targetLayer}/${targetSlice}/testing'`
                            )
                        },
                    })
                }

                const isImportFromPublicApi = targetSegments.length === 0

                if (!isImportFromPublicApi) {
                    context.report({
                        node,
                        messageId: PUBLIC_API,
                        fix: (fixer) => {
                            return fixer.replaceText(
                                node.source,
                                `'${alias}/${targetLayer}/${targetSlice}'`
                            )
                        },
                    })
                }
            },
        }
    },
}
