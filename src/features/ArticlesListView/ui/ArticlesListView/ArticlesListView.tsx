import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { ArticleList } from 'entities/Article'
import { withDynamicModuleLoader } from 'shared/lib/components'
import {
    articlesListViewActions,
    articlesListViewReducer,
    getArticlesList,
} from '../../model/slices/articleListView.slice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticleListViewInitialized,
    getArticleListViewLoading,
    getArticleListViewMode,
} from '../../model/selectors'
import { ArticleListInfiniteLoader } from '../ArticleListInfiniteLoader'
import { useSearchParams } from 'react-router-dom'

interface ArticlesListViewProps {
    className?: string
}

const ArticlesListViewPlain: FC<ArticlesListViewProps> = memo((props) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticlesList.selectAll)
    const loading = useSelector(getArticleListViewLoading)
    const viewMode = useSelector(getArticleListViewMode)
    const initialized = useSelector(getArticleListViewInitialized)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        if (!initialized) {
            dispatch(articlesListViewActions.initialize(searchParams))
        }
    }, [dispatch, initialized, searchParams])

    return (
        <ArticleListInfiniteLoader>
            <ArticleList
                className={classNames('', {}, [className])}
                loading={loading}
                articles={articles}
                view={viewMode}
            />
        </ArticleListInfiniteLoader>
    )
})
ArticlesListViewPlain.displayName = 'ArticlesListViewPlain'

export const ArticlesListView = withDynamicModuleLoader(ArticlesListViewPlain, {
    reducers: {
        articlesListView: articlesListViewReducer,
    },
    removeAfterUnmount: false,
})
