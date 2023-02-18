import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'

export function buildCssLoader (isDev: boolean): webpack.RuleSetRule {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string): boolean =>
              resourcePath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]'
          }
        }
      },
      'sass-loader'
    ]
  }
}
