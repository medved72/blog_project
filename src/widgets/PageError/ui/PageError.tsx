import { type FC, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button'
import { classNames } from '@/shared/lib/classNames/classNames'

import classes from './PageError.module.scss'

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
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    )
})
PageError.displayName = 'PageError'
