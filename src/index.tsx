import { createRoot } from 'react-dom/client'
import { App } from '@/app'
import '@/shared/config/i18n/i18nInit'

const bootstrap = (): void => {
    const container = document.getElementById('root')
    const root = createRoot(container!)
    root.render(<App />)
}

bootstrap()
export type { UserDto } from '@/shared/api/types'
export type { UserRoleDto } from '@/shared/api/types'
