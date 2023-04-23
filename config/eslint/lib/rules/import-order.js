/**
 * @fileoverview description
 * @author imxx
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

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
                groups: {
                    type: 'array',
                },
            },
        ], // Add a schema if the rule has options
    },

    create(context) {
        return {}
    },
}
