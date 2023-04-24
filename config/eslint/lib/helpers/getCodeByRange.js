function getCodeByRange(range, context) {
    const sourceCode = context.getSourceCode()
    return sourceCode.getText().slice(range[0], range[1])
}

module.exports = getCodeByRange
