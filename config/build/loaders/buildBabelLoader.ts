import type webpack from 'webpack'

export const buildBabelLoader = (): webpack.RuleSetRule => {
    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [],
            },
        },
    }
}
