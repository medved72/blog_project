/**
 * @fileoverview description
 * @author imxx
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const path = require('path')
const { isPathRelative } = require('../helpers')
const micromatch = require('micromatch')
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
        type: null, // `problem`, `suggestion`, or `layout`
        docs: {
            description: 'description',
            recommended: false,
            url: null, // URL to the documentation page for this rule
        },
        fixable: null, // Or `code` or `whitespace`
        schema: [
            {
                alias: { type: 'string' },
                ignorePatterns: {
                    type: 'array',
                },
            },
        ], // Add a schema if the rule has options
    },

    create(context) {
        const { alias = '', ignorePatterns = [] } = context.options?.[0] ?? {}
        const layers = [
            'app',
            'processes',
            'pages',
            'widgets',
            'features',
            'entities',
            'shared',
        ]

        return {
            ImportDeclaration(node) {
                const value = node.source.value

                if (isPathRelative(value)) {
                    return
                }

                const importTarget = (
                    alias ? value.replace(`${alias}/`, '') : value
                )
                    .split(path.sep)
                    .join(path.posix.sep)

                const fromFilename = context
                    .getFilename()
                    .split(`${path.sep}src${path.sep}`)[1]
                    .split(path.sep)
                    .join(path.posix.sep)

                const isIgnored = ignorePatterns.some((pattern) =>
                    micromatch.isMatch(fromFilename, pattern)
                )

                if (isIgnored) {
                    return
                }

                const [importLayer] = importTarget.split(path.posix.sep)
                const [fromLayer] = fromFilename.split(path.posix.sep)

                const importLayerIndex = layers.indexOf(importLayer)

                if (importLayerIndex === -1) {
                    return
                }

                const fromLayerIndex = layers.indexOf(fromLayer)
                const isAllowedImport =
                    fromLayerIndex !== importLayerIndex &&
                    fromLayerIndex < importLayerIndex

                if (!isAllowedImport) {
                    return context.report(
                        node,
                        'Импортировать со слоя выше или того же слоя запрещено архитектурой'
                    )
                }
            },
        }
    },
}
