import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import {
    type BuildConfigEnv,
    type BuildConfigMode,
    type BuildConfigPaths,
} from './config/build/types/config'
import path from 'path'
import type webpack from 'webpack'

export default (env: BuildConfigEnv): webpack.Configuration => {
    const port = env.port ?? 3000
    const mode: BuildConfigMode = env.mode ?? 'development'
    const apiUrl = env.apiUrl ?? 'http://localhost:8000/'
    const isDev = mode === 'development'
    const paths: BuildConfigPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    }
    return buildWebpackConfig({
        mode,
        paths,
        port,
        isDev,
        analyzerMode: env.analyzer,
        apiUrl,
    })
}
