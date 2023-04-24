function isPathRelative(path) {
    return path.startsWith(`.`) || path.startsWith(`..`)
}

module.exports = isPathRelative
