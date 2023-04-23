import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import HttpBackend, { type HttpBackendOptions } from 'i18next-http-backend'

i18n.use(HttpBackend)
    .use(initReactI18next)
    .init<HttpBackendOptions>({
        fallbackLng: 'ru',
        lng: 'ru',
        nsSeparator: '~~~',
        // debug: _IS_DEV_,
        saveMissing: true,
        backend: {
            addPath: 'http://localhost:8000/locales/add/{{lng}}/{{ns}}',
            customHeaders: {
                authorization: 'custom',
            },
            crossDomain: true,
            withCredentials: true,
            allowMultiLoading: true,
        },
    })
    .catch(console.error)

export default i18n
