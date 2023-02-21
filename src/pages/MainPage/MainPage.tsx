import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'features/BugButton'

const MainPage: FC = memo(() => {
    const { t } = useTranslation()
    return (
        <div>
            <BugButton />
            {t('mainPage')}
        </div>
    )
})

MainPage.displayName = 'MainPage'

export default MainPage
