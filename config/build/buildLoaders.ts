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

    const jsBabelLoader: webpack.RuleSetRule = buildBabelLoader({
        ...options,
        isTSX: false,
    })

    const tsxBabelLoader: webpack.RuleSetRule = buildBabelLoader({
        ...options,
        isTSX: true,
    })

    const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev)

    return [jsBabelLoader, tsxBabelLoader, cssLoader, svgLoader, fileLoader]
}
