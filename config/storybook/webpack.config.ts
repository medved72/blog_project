import webpack from 'webpack'
import { type BuildConfigPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({
    config,
}: {
    config: webpack.Configuration
}): webpack.Configuration => {
    const paths: BuildConfigPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: '',
    }

    config.resolve?.modules?.unshift(paths.src)
    config.resolve!.alias = { '@': paths.src }
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(buildCssLoader(true))

    config.module!.rules = config.module!.rules!.map(
        // @ts-expect-error error
        (rule: webpack.RuleSetRule) => {
            // eslint-disable-next-line
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/ }
            }

            return rule
        }
    )

    config?.module?.rules.push(buildSvgLoader())

    config.plugins?.push(
        new webpack.DefinePlugin({
            _IS_DEV_: true,
            _API_: JSON.stringify(''),
        })
    )

    return config
}
