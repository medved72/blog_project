const micromatch = require('micromatch')

function isMatch(value, pattern) {
    return micromatch.isMatch(value, pattern, { contains: true })
}

module.exports = isMatch
