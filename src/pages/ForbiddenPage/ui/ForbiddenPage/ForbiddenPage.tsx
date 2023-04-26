import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

const ForbiddenPage: FC = memo(() => {
    const { t } = useTranslation()
    return <div>{t('page.error.forbidden')}</div>
})
ForbiddenPage.displayName = 'ForbiddenPage'

export default ForbiddenPage
