'use strict'

const path = require('path')
const { isPathRelative, toPosixSep, isMatch } = require('../helpers')
const { layers } = require('../constants')

const defaultAllowedImports = {
    [layers.shared]: [],
    [layers.entities]: [layers.shared],
    [layers.features]: [layers.shared, layers.entities],
    [layers.widgets]: [layers.shared, layers.entities, layers.features],
    [layers.pages]: [
        layers.shared,
        layers.entities,
        layers.features,
        layers.widgets,
    ],
    [layers.processes]: [
        layers.shared,
        layers.entities,
        layers.features,
        layers.widgets,
        layers.pages,
    ],
    [layers.app]: [
        layers.shared,
        layers.entities,
        layers.features,
        layers.widgets,
        layers.pages,
        layers.processes,
    ],
}

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
                alias: { type: 'string' },
                ignorePatterns: { type: 'array' },
                allowedImports: { type: 'array' },
            },
        ],
    },

    create(context) {
        const {
            alias = '',
            ignorePatterns = [],
            allowedImports = defaultAllowedImports,
        } = context.options?.[0] ?? {}

        return {
            ImportDeclaration(node) {
                const value = node.source.value

                if (isPathRelative(value)) {
                    return
                }

                const importTarget = toPosixSep(
                    alias ? value.replace(`${alias}/`, '') : value
                )

                const [, fromFilename] = toPosixSep(
                    context.getFilename()
                ).split(`${path.posix.sep}src${path.posix.sep}`)

                const isIgnored = ignorePatterns.some((pattern) =>
                    isMatch(fromFilename, pattern)
                )

                if (isIgnored) {
                    return
                }

                const [importLayer] = importTarget.split(path.posix.sep)
                const [fromLayer] = fromFilename.split(path.posix.sep)

                if (!allowedImports[importLayer]) {
                    return
                }

                const isAllowedImport =
                    allowedImports[fromLayer].indexOf(importLayer) !== -1

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
