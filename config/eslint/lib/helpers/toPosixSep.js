const path = require('path')

function toPosixSep(value) {
    return value.split(path.sep).join(path.posix.sep)
}

module.exports = toPosixSep
