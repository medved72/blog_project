import type webpack from 'webpack'
import { type BuildConfigOptions } from '../types/config'
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface BuildBabelLoaderOptions extends BuildConfigOptions {
    isTSX: boolean
}
export const buildBabelLoader = ({
    isDev,
    isTSX,
}: BuildBabelLoaderOptions): webpack.RuleSetRule => {
    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTSX && [
                        babelRemovePropsPlugin,
                        { props: ['data-testid'] },
                    ],
                ].filter(Boolean),
            },
        },
    }
}
