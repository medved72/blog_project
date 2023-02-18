const path = require('path')

module.exports = function (wallaby) {
  console.log({ wallaby })
  return {
    testFramework: {
      configFile: path.resolve(__dirname, 'config', 'jest', 'jest.config.ts')
    }
  }
}
