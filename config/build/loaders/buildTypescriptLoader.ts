import type webpack from 'webpack'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { type BuildConfigOptions } from '../types/config'

export const buildTypescriptLoader = ({
    isDev,
}: BuildConfigOptions): webpack.RuleSetRule => {
    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDev,
            },
        },
    }
}
