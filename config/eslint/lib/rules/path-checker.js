/**
 * @fileoverview check relative paths in the module
 * @author imxx
 */
'use strict'

const path = require('path')

const layers = {
    entities: 'entities',
    features: 'features',
    shared: 'shared',
    pages: 'pages',
    processes: 'processes',
    widgets: 'widgets',
}

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
        schema: [],
    },

    create(context) {
        return {
            ImportDeclaration(node) {
                const importTo = node.source.value
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

function isPathRelative(path) {
    return path === '.' || path.startsWith('./') || path.startsWith('../')
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
