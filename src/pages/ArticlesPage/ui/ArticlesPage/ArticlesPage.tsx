import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticlesPage.module.scss'
import {
    ArticlesListView,
    getArticleListViewMode,
    setArticleListViewMode,
} from 'features/ArticlesListView'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ArticleListViewMode } from 'entities/Article'
import { useSelector } from 'react-redux'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const viewMode = useSelector(getArticleListViewMode)

    const handleViewChange = useCallback(
        (view: ArticleListViewMode) => {
            dispatch(setArticleListViewMode(view))
        },
        [dispatch]
    )

    return (
        <div className={classNames(classes.articlesPage, {}, [className])}>
            <ArticleViewSelector view={viewMode} onChange={handleViewChange} />
            <ArticlesListView />
        </div>
    )
})
ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
