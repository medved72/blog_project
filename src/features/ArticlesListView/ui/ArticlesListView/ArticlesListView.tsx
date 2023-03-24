import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticlesListView.module.scss'
import { ArticleList, type ArticleListViewMode } from 'entities/Article'
import { withDynamicModuleLoader } from 'shared/lib/components'
import {
    articlesListViewReducer,
    getArticlesList,
    setArticleListViewMode,
} from '../../model/slices/articleListView.slice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticleListViewLoading,
    getArticleListViewMode,
} from '../../model/selectors'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { ArticleListInfiniteLoader } from '../ArticleListInfiniteLoader'

interface ArticlesListViewProps {
    className?: string
}

const isArticleListViewMode = (
    value: unknown
): value is ArticleListViewMode => {
    return value === 'tile' || value === 'list'
}

const ArticlesListViewPlain: FC<ArticlesListViewProps> = memo((props) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticlesList.selectAll)
    const loading = useSelector(getArticleListViewLoading)
    const viewMode = useSelector(getArticleListViewMode)

    useEffect(() => {
        const localStorageViewMode = localStorage.getItem(
            ARTICLE_VIEW_LOCALSTORAGE_KEY
        )

        if (isArticleListViewMode(localStorageViewMode)) {
            dispatch(setArticleListViewMode(localStorageViewMode))
        }
    }, [dispatch])

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
