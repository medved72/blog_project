import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from '../../../../public/locales/ru/translation.json'
import ru_about from '../../../../public/locales/ru/about.json'
import en from '../../../../public/locales/en/translation.json'
import en_about from '../../../../public/locales/en/about.json'

export const initI18nForTests = async (): Promise<unknown> =>
    await i18n.use(initReactI18next).init({
        fallbackLng: 'ru',
        lng: 'ru',
        debug: false,
        interpolation: { escapeValue: false },
        react: {
            useSuspense: false,
        },
        resources: {
            ru: {
                translation: ru,
                about: ru_about,
            },
            en: {
                translation: en,
                about: en_about,
            },
        },
    })
