import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import classes from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

export interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = memo(({ className }) => {
    const { t } = useTranslation()

    const reloadPage = useCallback(() => {
        window.location.reload()
    }, [])

    return (
        <div className={classNames(classes.pageError, {}, [className])}>
            <p>{t('errorBoundary')}</p>
            <Button onClick={reloadPage}>{t('reloadPage')}</Button>
        </div>
    )
})
PageError.displayName = 'PageError'
