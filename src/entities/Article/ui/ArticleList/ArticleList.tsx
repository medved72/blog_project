import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleList.module.scss'
import { type ArticleListProps } from '../../model'
import { ArticleListItem, ArticleListItemSkeleton } from '../ArticleListItem'

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { className, articles, loading, view = 'list' } = props

    if (loading) {
        return (
            <div
                className={classNames(classes.articleList, {}, [
                    className,
                    classes[view],
                ])}
            >
                {new Array(view === 'tile' ? 9 : 3).fill(0).map((_, index) => (
                    <ArticleListItemSkeleton key={index} view={view} />
                ))}
            </div>
        )
    }

    return (
        <div
            className={classNames(classes.articleList, {}, [
                className,
                classes[view],
            ])}
        >
            {articles.length > 0
                ? articles.map((article) => {
                      return (
                          <ArticleListItem
                              key={article.id}
                              article={article}
                              view={view}
                          />
                      )
                  })
                : null}
        </div>
    )
})
ArticleList.displayName = 'ArticleList'
