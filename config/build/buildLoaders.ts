import type webpack from 'webpack'
import { type BuildConfigOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(
    options: BuildConfigOptions
): webpack.RuleSetRule[] {
    const { isDev } = options

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader: webpack.RuleSetRule = buildSvgLoader()

    const babelLoader: webpack.RuleSetRule = buildBabelLoader(options)

    const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev)

    return [babelLoader, cssLoader, svgLoader, fileLoader]
}
