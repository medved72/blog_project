import { type FC, memo } from 'react'

import { classNames } from '@/shared/lib/classNames'

import { ArticleListItem, ArticleListItemSkeleton } from '../ArticleListItem'
import { type ArticleListProps, type ArticleListViewMode } from '../../model'

import classes from './ArticleList.module.scss'

const getSkeletons = (view: ArticleListViewMode) =>
    new Array(view === 'tile' ? 9 : 3)
        .fill(0)
        .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />)

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { className, articles, loading, view = 'tile', target } = props

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
                              target={target}
                              article={article}
                              view={view}
                          />
                      )
                  })
                : null}
            {loading && getSkeletons(view)}
        </div>
    )
})
ArticleList.displayName = 'ArticleList'
