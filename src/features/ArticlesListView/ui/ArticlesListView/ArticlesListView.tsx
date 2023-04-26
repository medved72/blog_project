import { type FC, memo, useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { ArticleList } from '@/entities/Article'

import { Text } from '@/shared/ui/Text'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { withDynamicModuleLoader } from '@/shared/lib/components'

import {
    articlesListViewActions,
    articlesListViewReducer,
    getArticlesList,
} from '../../model/slices/articleListView.slice'
import {
    getArticleListViewInitialized,
    getArticleListViewLoading,
    getArticleListViewMode,
} from '../../model/selectors'
import { ArticleListInfiniteLoader } from '../ArticleListInfiniteLoader'

interface ArticlesListViewProps {
    className?: string
}

const ArticlesListViewPlain: FC<ArticlesListViewProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation('articleList')
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
            {!loading && !articles.length && (
                <Text title={t('articles.not_found')} size="L" />
            )}
            <ArticleList
                className={className}
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
