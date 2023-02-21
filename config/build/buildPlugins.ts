import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type BuildConfigOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({
    isDev,
    paths,
    analyzerMode = 'disabled',
}: BuildConfigOptions): webpack.WebpackPluginInstance[] {
    const plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({ _IS_DEV_: isDev }),
        new BundleAnalyzerPlugin({ analyzerMode }),
    ]
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }))
    }

    return plugins
}
