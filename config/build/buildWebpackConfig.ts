import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { type BuildConfigOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(
    options: BuildConfigOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].bundle.js',
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
