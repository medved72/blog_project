import type webpack from 'webpack'
import { type BuildConfigOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader'

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

    const babelLoader: webpack.RuleSetRule = buildBabelLoader()

    const typescriptLoader: webpack.RuleSetRule = buildTypescriptLoader(options)

    const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev)

    return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader]
}
