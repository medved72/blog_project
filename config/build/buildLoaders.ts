import type webpack from 'webpack'
import { type BuildConfigOptions } from './types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders ({
  isDev
}: BuildConfigOptions): webpack.RuleSetRule[] {
  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const svgLoader: webpack.RuleSetRule = buildSvgLoader()

  const babelLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract', {
            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            keyAsDefaultValue: true,
            locales: ['ru', 'en']
          }]
        ]
      }
    }
  }

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
        }),
        transpileOnly: isDev
      }
    }
  }

  const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev)

  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}
