import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type BuildConfigOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins({
    isDev,
    paths,
    analyzerMode = 'disabled',
    apiUrl,
}: BuildConfigOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev

    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        isProd &&
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        new webpack.DefinePlugin({
            _IS_DEV_: isDev,
            _API_: JSON.stringify(apiUrl),
        }),
        new BundleAnalyzerPlugin({ analyzerMode }),
        isProd &&
            new CopyPlugin({
                patterns: [{ from: paths.locales, to: paths.buildLocales }],
            }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            async: isDev,
            devServer: true,
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
        isDev && new ReactRefreshWebpackPlugin({ overlay: true }),
    ].filter(<T>(value: T | boolean): value is T => !!value)
}
