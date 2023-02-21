import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = memo(() => {
    const { t } = useTranslation(['about'])
    return <div>{t('about:aboutPage')}</div>
})

AboutPage.displayName = 'AboutPage'

export default AboutPage
