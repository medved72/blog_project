import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = memo(() => {
    const { t } = useTranslation()
    return <div>{t('mainPage')}</div>
})

MainPage.displayName = 'MainPage'

export default MainPage
