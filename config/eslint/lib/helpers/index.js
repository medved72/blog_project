const isPathRelative = require('./isPathRelative')
const isMatch = require('./isMatch')
const getCodeByRange = require('./getCodeByRange')
const toPosixSep = require('./toPosixSep')
const trimEachRow = require('./trimEachRow')
const isMatchRegexp = require('./isMatchRegexp')

module.exports = {
    isPathRelative,
    isMatch,
    getCodeByRange,
    toPosixSep,
    trimEachRow,
    isMatchRegexp,
}
