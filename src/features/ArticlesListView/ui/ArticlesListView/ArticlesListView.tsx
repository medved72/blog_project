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
import { Text } from '../../../../shared/ui/Text'
import { useTranslation } from 'react-i18next'
import classes from './ArticlesListView.module.scss'

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
                <Text
                    className={classes.notFound}
                    title={t('articles.not_found')}
                    size="L"
                />
            )}
            <ArticleList
                className={classNames(classes.list, {}, [className])}
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
