import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticlesListView.module.scss'
import { ArticleList } from 'entities/Article'
import { withDynamicModuleLoader } from 'shared/lib/components'
import {
    articlesListViewReducer,
    getArticlesList,
    initializeArticleListView,
} from '../../model/slices/articleListView.slice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
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
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticlesList.selectAll)
    const loading = useSelector(getArticleListViewLoading)
    const viewMode = useSelector(getArticleListViewMode)
    const initialized = useSelector(getArticleListViewInitialized)

    useEffect(() => {
        if (!initialized) {
            dispatch(initializeArticleListView())
        }
    }, [dispatch, initialized])

    return (
        <ArticleListInfiniteLoader>
            <ArticleList
                className={classNames(classes.articlesListView, {}, [
                    className,
                ])}
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
