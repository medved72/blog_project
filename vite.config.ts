import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    plugins: [
        react(),
        svgr({
            exportAsDefault: true,
        }),
    ],
    define: {
        _IS_DEV_: true,
        _API_: JSON.stringify('http://localhost:8000'),
    },
})
