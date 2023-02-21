import { type BuildConfigOptions } from './types/config'
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer({
    port,
}: BuildConfigOptions): DevServerConfiguration {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}
