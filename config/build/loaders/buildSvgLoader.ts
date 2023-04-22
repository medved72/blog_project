import type webpack from 'webpack'

export function buildSvgLoader(): webpack.RuleSetRule {
    return {
        test: /\.svg$/,
        use: {
            loader: '@svgr/webpack',
            options: {
                svgoConfig: {
                    plugins: [
                        {
                            name: 'removeViewBox',
                            active: false,
                        },
                    ],
                },
            },
        },
    }
}
