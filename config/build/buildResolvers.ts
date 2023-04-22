import type webpack from 'webpack'
import { type BuildConfigOptions } from './types/config'

export function buildResolvers({
    paths,
}: BuildConfigOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        preferAbsolute: true,
        alias: {
            '@': paths.src,
        },
    }
}
