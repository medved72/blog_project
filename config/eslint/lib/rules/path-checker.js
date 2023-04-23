/**
 * @fileoverview check relative paths in the module
 * @author imxx
 */
'use strict'

const path = require('path')
const { isPathRelative } = require('../helpers')
const { layers } = require('../constants')

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
        messages: {
            shouldRelativeImport:
                'В рамках одного слайса все пути должны быть относительными',
        },
        type: 'problem',
        docs: {
            description: 'check relative paths in the module',
            recommended: false,
            url: null,
        },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: { alias: { type: 'string' } },
            },
        ],
    },

    create(context) {
        const alias = context.options?.[0]?.alias ?? ''

        return {
            ImportDeclaration(node) {
                const value = node.source.value
                const importTo = alias ? value.replace(`${alias}/`, '') : value
                const fromFilename = context.getFilename()
                if (shouldBeRelative(fromFilename, importTo)) {
                    context.report({
                        node: node,
                        messageId: 'shouldRelativeImport',
                    })
                }
            },
        }
    },
}

function shouldBeRelative(from, to) {
    const toArray = to.split('/')

    if (isPathRelative(to)) {
        return false
    }

    const [toLayer, toSlice] = toArray

    if (!toLayer || !toSlice || !layers[toLayer]) {
        return false
    }

    const normalizedPath = path.toNamespacedPath(from)

    const projectFrom = normalizedPath.split('src')[1]

    const [, fromLayer, fromSlice] = projectFrom.split('\\')

    if (!fromLayer || !fromSlice || !layers[fromLayer]) {
        return false
    }

    return fromSlice === toSlice && toLayer === fromLayer
}
