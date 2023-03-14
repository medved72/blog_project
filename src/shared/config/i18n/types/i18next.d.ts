import 'i18next'
import translation from '../../../../../public/locales/ru/translation.json'
import about from '../../../../../public/locales/ru/about.json'
import profile from '../../../../../public/locales/ru/profile.json'
import articleDetails from '../../../../../public/locales/ru/articleDetails.json'

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation'
        nsSeparator: '~~~'
        returnNull: false
        resources: {
            translation: typeof translation
            about: typeof about
            profile: typeof profile
            articleDetails: typeof articleDetails
        }
    }
}
