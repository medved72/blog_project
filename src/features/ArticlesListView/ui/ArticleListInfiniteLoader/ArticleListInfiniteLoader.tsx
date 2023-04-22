import {
    type FC,
    memo,
    type PropsWithChildren,
    useCallback,
    useEffect,
} from 'react'
import { classNames } from '@/shared/lib/classNames'
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { fetchNextArticlesPage } from '../../model/services/fetchNextPage'
import { useSelector } from 'react-redux'
import { getArticlesList } from '../../model/slices/articleListView.slice'
import { getArticleListViewHasMore } from '../../model/selectors'

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

    const { trigger, intersectionRef } = useIntersectionObserver({
        onIntersect: handleLoadNext,
    })

    useEffect(() => {
        if (hasMore && intersectionRef.current) {
            handleLoadNext().catch(console.error)
        }
    }, [articles.length, handleLoadNext, hasMore, intersectionRef])

    return (
        <div className={classNames('', {}, [className])}>
            {children}
            {trigger}
        </div>
    )
})
ArticleListInfiniteLoader.displayName = 'ArticleListInfiniteLoader'
