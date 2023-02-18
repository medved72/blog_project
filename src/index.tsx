import { App } from 'app'
import { createRoot } from 'react-dom/client'
import { i18nInit } from 'shared/config/i18n'

const bootstrap = (): void => {
  i18nInit().catch(console.error)
  const container = document.getElementById('root')
  const root = createRoot(container!)
  root.render(<App />)
}

bootstrap()
