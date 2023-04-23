/**
 * @fileoverview description
 * @author imxx
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const micromatch = require('micromatch')

const INVALID_IMPORT_ORDER = 'INVALID_IMPORT_ORDER'

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
        type: 'layout', // `problem`, `suggestion`, or `layout`
        docs: {
            description: 'description',
            recommended: false,
            url: null, // URL to the documentation page for this rule
        },
        fixable: 'code', // Or `code` or `whitespace`
        messages: {
            [INVALID_IMPORT_ORDER]: 'Порядок импортов неправильный',
        },
        schema: [
            {
                groups: {
                    type: 'array',
                },
            },
        ], // Add a schema if the rule has options
    },

    create(context) {
        const { groups } = context.options[0] ?? {}

        context.options

        return {
            Program(node) {
                const importDeclarations = node.body.filter(
                    ({ type }) => type === 'ImportDeclaration'
                )

                const importOrders = calcOrders(importDeclarations, groups)

                const sortedImportOrders = importOrders
                    .slice()
                    .sort(
                        ({ order: orderA }, { order: orderB }) =>
                            orderA - orderB
                    )

                if (isInvalidOrder(importOrders.map(({ order }) => order))) {
                    return context.report({
                        node,
                        messageId: INVALID_IMPORT_ORDER,
                        fix: (fixer) => {
                            const [range, fixedCode] = printFixedCode(
                                context,
                                importOrders,
                                sortedImportOrders
                            )
                            return fixer.replaceTextRange(range, fixedCode)
                        },
                    })
                }
            },
        }
    },
}

function printFixedCode(context, importOrders, sortedImportOrders) {
    const [start, end] = [
        importOrders[0].node.range[0],
        importOrders[importOrders.length - 1].node.range[1],
    ]

    return [
        [start, end],
        sortedImportOrders
            .map(({ node }) => getCodeByRange(node.range, context))
            .join('\n'),
    ]
}

function getCodeByRange(range, context) {
    const sourceCode = context.getSourceCode()
    return sourceCode.getText().slice(range[0], range[1])
}

function isInvalidOrder(importOrders) {
    return importOrders.some((order, index, values) => {
        if (index === 0) {
            return false
        }
        const prevOrder = values[index - 1]

        return prevOrder > order
    })
}

function calcOrders(importDeclarations, groups) {
    return importDeclarations.map((importDeclarationNode) => {
        const value = importDeclarationNode.source.value
        return {
            node: importDeclarationNode,
            order: groups.reduce((acc, { match, order }) => {
                if (acc !== null) {
                    return acc
                }

                if (isMatch(value, match)) {
                    return order
                }

                return acc
            }, null),
        }
    })
}

function isMatch(value, pattern) {
    return micromatch.isMatch(value, pattern, { contains: true })
}
