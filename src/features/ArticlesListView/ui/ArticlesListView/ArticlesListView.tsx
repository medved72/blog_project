import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticlesListView.module.scss'
import { ArticleList } from 'entities/Article'
import { withDynamicModuleLoader } from 'shared/lib/components'
import {
    articlesListViewReducer,
    getArticlesList,
    initArticleListViewModeState,
} from '../../model/slices/articleListView.slice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
    getArticleListViewLoading,
    getArticleListViewMode,
} from '../../model/selectors'

interface ArticlesListViewProps {
    className?: string
}

const ArticlesListViewPlain: FC<ArticlesListViewProps> = memo((props) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticlesList.selectAll)
    const loading = useSelector(getArticleListViewLoading)
    const viewMode = useSelector(getArticleListViewMode)

    useEffect(() => {
        dispatch(fetchArticlesList()).catch(console.error)
        dispatch(initArticleListViewModeState())
    }, [dispatch])

    return (
        <ArticleList
            className={classNames(classes.articlesListView, {}, [className])}
            loading={loading}
            articles={articles}
            view={viewMode}
        />
    )
})
ArticlesListViewPlain.displayName = 'ArticlesListViewPlain'

export const ArticlesListView = withDynamicModuleLoader(ArticlesListViewPlain, {
    reducers: {
        articlesListView: articlesListViewReducer,
    },
    removeAfterUnmount: false,
})
