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
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '\\.jpg': path.resolve(__dirname, 'jestRandomString.tsx'),
        '@/app/(.*)': '<rootDir>src/app/$1',
        '@/pages/(.*)': '<rootDir>src/pages/$1',
        '@/widgets/(.*)': '<rootDir>src/widgets/$1',
        '@/features/(.*)': '<rootDir>src/features/$1',
        '@/entities/(.*)': '<rootDir>src/entities/$1',
        '@/shared/(.*)': '<rootDir>src/shared/$1',
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '<rootDir>/reports/unit',
                filename: 'index.html',
                openReport: false,
                inlineSource: true,
            },
        ],
    ],
    globals: {
        _IS_DEV_: false,
        _API_: '',
    },
}
