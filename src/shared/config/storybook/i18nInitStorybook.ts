import i18n from 'i18next'

import ru from '../../../../public/locales/ru/translation.json'
import ru_about from '../../../../public/locales/ru/about.json'
import ru_profile from '../../../../public/locales/ru/profile.json'

import en from '../../../../public/locales/en/translation.json'
import en_about from '../../../../public/locales/en/about.json'
import en_profile from '../../../../public/locales/en/profile.json'

export const i18nInitStorybook = async (): Promise<void> => {
    await i18n.init({
        fallbackLng: 'ru',
        lng: 'ru',
        debug: _IS_DEV_,
        interpolation: { escapeValue: false },
        react: {
            useSuspense: false,
        },
        resources: {
            ru: {
                translation: ru,
                about: ru_about,
                profile: ru_profile,
            },
            en: {
                translation: en,
                about: en_about,
                profile: en_profile,
            },
        },
    })
}
