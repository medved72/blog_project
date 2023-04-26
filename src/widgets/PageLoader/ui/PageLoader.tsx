import { type FC, memo } from 'react'

import { DotsSpinner } from '@/shared/ui/Spinner'
import { classNames } from '@/shared/lib/classNames/classNames'

import classes from './PageLoader.module.scss'

export interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = memo(({ className }) => {
    return (
        <div className={classNames(classes.pageLoader, {}, [className])}>
            <DotsSpinner />
        </div>
    )
})
PageLoader.displayName = 'PageLoader'
