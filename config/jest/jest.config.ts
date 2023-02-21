import path from 'path'

export default {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    rootDir: '../../',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        'entities/(.*)': '<rootDir>src/entities/$1',
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    globals: {
        _IS_DEV_: true,
    },
}
