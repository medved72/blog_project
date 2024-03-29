import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '../../../../public/locales/en/translation.json'
import en_about from '../../../../public/locales/en/about.json'
import en_articleDetails from '../../../../public/locales/en/articleDetails.json'
import en_articleList from '../../../../public/locales/en/articleList.json'
import en_profile from '../../../../public/locales/en/profile.json'
import ru from '../../../../public/locales/ru/translation.json'
import ru_about from '../../../../public/locales/ru/about.json'
import ru_articleDetails from '../../../../public/locales/ru/articleDetails.json'
import ru_articleList from '../../../../public/locales/ru/articleList.json'
import ru_profile from '../../../../public/locales/ru/profile.json'

i18n.use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        lng: 'ru',
        debug: _IS_DEV_,
        nsSeparator: '~~~',
        interpolation: { escapeValue: false },
        react: {
            useSuspense: false,
        },
        resources: {
            ru: {
                translation: ru,
                about: ru_about,
                profile: ru_profile,
                articleDetails: ru_articleDetails,
                articleList: ru_articleList,
            },
            en: {
                translation: en,
                about: en_about,
                profile: en_profile,
                articleDetails: en_articleDetails,
                articleList: en_articleList,
            },
        },
    })
    .catch(console.log)

export { i18n }
