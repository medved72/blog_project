import type webpack from 'webpack'
import { type BuildConfigOptions } from '../types/config'
import babelConfig from '../../../babel.config.json'

export const buildBabelLoader = ({
    isDev,
}: BuildConfigOptions): webpack.RuleSetRule => {
    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                ...babelConfig,
                plugins: [
                    ...babelConfig.plugins,
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    }
}
