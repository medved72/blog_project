import { App } from '@/app'
import { createRoot } from 'react-dom/client'
import '@/shared/config/i18n/i18nInit'

const bootstrap = (): void => {
    const container = document.getElementById('root')
    const root = createRoot(container!)
    root.render(<App />)
}

bootstrap()
