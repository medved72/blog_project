const micromatch = require('micromatch')

function isMatch(value, pattern) {
    return micromatch.isMatch(value, pattern)
}

module.exports = isMatch
