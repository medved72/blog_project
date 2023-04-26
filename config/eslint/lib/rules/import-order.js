'use strict'

const { getCodeByRange, isMatchRegexp } = require('../helpers')

const INVALID_IMPORT_ORDER = 'INVALID_IMPORT_ORDER'

module.exports = {
    meta: {
        type: 'layout',
        docs: {
            description: 'description',
            recommended: false,
            url: null,
        },
        fixable: 'code',
        messages: {
            [INVALID_IMPORT_ORDER]: 'Порядок импортов неправильный',
        },
        schema: [
            {
                groups: {
                    type: 'array',
                },
            },
        ],
    },

    create(context) {
        const { groups } = context.options[0] ?? {}

        context.options

        return {
            Program(node) {
                const importDeclarations = node.body.filter(
                    ({ type }) => type === 'ImportDeclaration'
                )

                if (importDeclarations.length === 0) {
                    return
                }

                const importOrders = calcOrders(importDeclarations, groups)

                const [replaceRange, fixedCode] = printFixedCode(
                    context,
                    importOrders
                )

                const originalCode = getCodeByRange(replaceRange, context)

                if (fixedCode !== originalCode) {
                    return context.report({
                        node,
                        messageId: INVALID_IMPORT_ORDER,
                        fix: (fixer) => {
                            return fixer.replaceTextRange(
                                replaceRange,
                                fixedCode
                            )
                        },
                    })
                }
            },
        }
    },
}

function printFixedCode(context, importOrders) {
    const possiblesOrders = new Set(importOrders.map(({ order }) => order))

    const groups = importOrders.reduce((acc, { node, order }) => {
        acc[order] = [].concat(acc[order] ?? [], [
            getCodeByRange(node.range, context),
        ])

        return acc
    }, {})

    const sortedOrders = Array.from(possiblesOrders).sort()

    const sortedGroups = Array.from(possiblesOrders).reduce((acc, order) => {
        acc[order] = [].concat(acc[order] ?? [], groups[order].slice().sort())
        return acc
    }, {})

    const [start, end] = [
        importOrders[0].node.range[0],
        importOrders[importOrders.length - 1].node.range[1],
    ]

    const fixedCode = sortedOrders
        .reduce((acc, order, index, values) => {
            sortedGroups[order].forEach((code) => {
                acc.push(code)
            })

            if (index !== values.length - 1) {
                acc.push('')
            }

            return acc
        }, [])
        .join('\n')

    return [[start, end], fixedCode]
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

                if (isMatchRegexp(value, match)) {
                    return order
                }

                return acc
            }, null),
        }
    })
}
