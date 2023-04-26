import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

const AboutPage: FC = memo(() => {
    const { t } = useTranslation('about')
    return <div>{t('Страница о нас', { ns: 'about' })}</div>
})

AboutPage.displayName = 'AboutPage'

export default AboutPage
