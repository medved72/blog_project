import {
    type FC,
    memo,
    type PropsWithChildren,
    useCallback,
    useEffect,
} from 'react'

import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver'

import { fetchNextArticlesPage } from '../../model/services/fetchNextPage'
import { getArticleListViewHasMore } from '../../model/selectors'
import { getArticlesList } from '../../model/slices/articleListView.slice'

interface ArticleListInfiniteLoaderProps {
    className?: string
}

export const ArticleListInfiniteLoader: FC<
    PropsWithChildren<ArticleListInfiniteLoaderProps>
> = memo((props) => {
    const { className, children } = props

    const articles = useSelector(getArticlesList.selectAll)

    const hasMore = useSelector(getArticleListViewHasMore)

    const dispatch = useAppDispatch()

    const handleLoadNext = useCallback(async () => {
        await dispatch(fetchNextArticlesPage())
    }, [dispatch])

    const { trigger, isIntersecting } = useIntersectionObserver({
        root: document.getElementById('page-wrapper'),
        onIntersect: handleLoadNext,
    })

    useEffect(() => {
        if (hasMore && isIntersecting) {
            handleLoadNext().catch(console.error)
        }
    }, [articles.length, handleLoadNext, hasMore, isIntersecting])

    return (
        <div className={classNames('', {}, [className])}>
            {children}
            {trigger}
        </div>
    )
})
ArticleListInfiniteLoader.displayName = 'ArticleListInfiniteLoader'
