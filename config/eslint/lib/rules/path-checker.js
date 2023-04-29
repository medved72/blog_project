'use strict'

const path = require('path')
const { isPathRelative, toPosixSep } = require('../helpers')
const { layers } = require('../constants')

const SHOULD_BE_RELATIVE = 'SHOULD_BE_RELATIVE'

module.exports = {
    meta: {
        messages: {
            [SHOULD_BE_RELATIVE]:
                'В рамках одного слайса все пути должны быть относительными',
        },
        type: 'problem',
        docs: {
            description: 'check relative paths in the module',
            recommended: false,
            url: null,
        },
        fixable: 'code',
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
                const importTarget = alias
                    ? value.replace(`${alias}/`, '')
                    : value
                const fromFilename = context.getFilename()
                if (shouldBeRelative(fromFilename, importTarget)) {
                    context.report({
                        node: node,
                        messageId: SHOULD_BE_RELATIVE,
                        fix: (fixer) => {
                            return fixer.replaceText(
                                node.source,
                                printFix(context, fromFilename, importTarget)
                            )
                        },
                    })
                }
            },
        }
    },
}

function printFix(context, importFrom, importTarget) {
    const absolutePath = resolveAbsolutePathToSrc(context)

    const absoluteImportTarget = path.join(absolutePath, importTarget)

    const relativePath = path
        .relative(importFrom, absoluteImportTarget)
        .replace(`..${path.sep}`, '')
        .replace(new RegExp('\\\\', 'g'), '/')

    if (!relativePath.startsWith('..')) {
        return `'./${relativePath}'`
    }

    return `'${relativePath}'`
}

function shouldBeRelative(importFrom, importTarget) {
    if (isPathRelative(importTarget)) {
        return false
    }

    const [targetLayer, targetSlice] = normalizeTargetFileName(importTarget)

    if (!targetLayer || !targetSlice || !layers[targetLayer]) {
        return false
    }

    const [fromLayer, fromSlice] = normalizeFromFileName(importFrom)

    if (!fromLayer || !fromSlice || !layers[fromLayer]) {
        return false
    }

    return fromLayer === targetLayer && fromSlice === targetSlice
}

function normalizeTargetFileName(value) {
    return toPosixSep(value).split(path.posix.sep)
}

function normalizeFromFileName(value) {
    return toPosixSep(value)
        .split(`${path.posix.sep}src${path.posix.sep}`)[1]
        .split(path.posix.sep)
}

function resolveAbsolutePathToSrc(context) {
    const [absolutePath] = context
        .getFilename()
        .split(`${path.sep}src${path.sep}`)
    return path.join(absolutePath, 'src')
}
