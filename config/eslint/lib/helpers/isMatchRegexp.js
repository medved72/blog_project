function isMatchRegexp(value, pattern) {
    return new RegExp(pattern).test(value)
}

module.exports = isMatchRegexp
