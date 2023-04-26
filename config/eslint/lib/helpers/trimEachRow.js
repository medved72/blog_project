const trimEachRow = (value) => {
    return value
        .split('\n')
        .map((row) => row.trim())
        .join('\n')
}

module.exports = trimEachRow
