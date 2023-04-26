import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

const AdminPanelPage: FC = memo(() => {
    const { t } = useTranslation('admin')

    return <div>{t('admin.page.title')}</div>
})
AdminPanelPage.displayName = 'AdminPanelPage'

export default AdminPanelPage
