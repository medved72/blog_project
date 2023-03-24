import { type FC, memo, type PropsWithChildren, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleListInfiniteLoader.module.scss'
import { useIntersectionObserver } from 'shared/hooks/useIntersectionObserver'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchNextArticlesPage } from '../../model/services/fetchNextPage'

interface ArticleListInfiniteLoaderProps {
    className?: string
}

export const ArticleListInfiniteLoader: FC<
    PropsWithChildren<ArticleListInfiniteLoaderProps>
> = memo((props) => {
    const { className, children } = props

    const dispatch = useAppDispatch()

    const handleLoadNext = useCallback(async () => {
        await dispatch(fetchNextArticlesPage())
    }, [dispatch])

    const trigger = useIntersectionObserver({ onIntersect: handleLoadNext })

    return (
        <div
            className={classNames(classes.articleListInfiniteLoader, {}, [
                className,
            ])}
        >
            {children}
            {trigger}
        </div>
    )
})
ArticleListInfiniteLoader.displayName = 'ArticleListInfiniteLoader'
