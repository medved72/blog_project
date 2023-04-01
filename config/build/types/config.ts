import { type BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export type BuildConfigMode = 'development' | 'production'

export interface BuildConfigEnv {
    port: number
    mode: BuildConfigMode
    analyzer: BundleAnalyzerPlugin.Options['analyzerMode']

    apiUrl: string
}

export interface BuildConfigPaths {
    entry: string
    build: string
    html: string
    src: string
    locales: string
    buildLocales: string
}

export interface BuildConfigOptions {
    mode: BuildConfigMode
    paths: BuildConfigPaths
    port: number
    isDev: boolean
    analyzerMode: BundleAnalyzerPlugin.Options['analyzerMode']
    apiUrl: string
}
