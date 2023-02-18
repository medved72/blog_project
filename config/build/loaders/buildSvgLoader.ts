import type webpack from 'webpack'

export function buildSvgLoader (): webpack.RuleSetRule {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }
}
