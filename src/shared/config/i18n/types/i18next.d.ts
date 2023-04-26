import 'i18next'

import about from '../../../../../public/locales/ru/about.json'
import admin from '../../../../../public/locales/ru/admin.json'
import articleDetails from '../../../../../public/locales/ru/articleDetails.json'
import articleList from '../../../../../public/locales/ru/articleList.json'
import profile from '../../../../../public/locales/ru/profile.json'
import translation from '../../../../../public/locales/ru/translation.json'

type AnyKey = Record<string, string>

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation'
        nsSeparator: '~~~'
        returnNull: false
        resources: {
            translation: typeof translation & AnyKey
            about: typeof about & AnyKey
            profile: typeof profile & AnyKey
            articleDetails: typeof articleDetails & AnyKey
            articleList: typeof articleList & AnyKey
            admin: typeof admin & AnyKey
        }
    }
}
