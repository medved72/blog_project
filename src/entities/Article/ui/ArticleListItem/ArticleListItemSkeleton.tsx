import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleListItem.module.scss'
import { type ArticleListViewMode } from '../../model'
import { Card } from 'shared/ui/Card'
import { Skeleton } from 'shared/ui/Skeleton'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleListViewMode
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
    (props) => {
        const { className, view } = props

        switch (view) {
            case 'tile':
                return (
                    <div
                        className={classNames(classes.articleListItem, {}, [
                            className,
                            classes[view],
                        ])}
                    >
                        <Card>
                            <div className={classes.imageWrapper}>
                                <Skeleton
                                    width={200}
                                    height={200}
                                    className={classes.image}
                                />
                            </div>
                            <div className={classes.infoWrapper}>
                                <Skeleton width={130} height={16} />
                            </div>
                            <Skeleton width={150} height={16} />
                        </Card>
                    </div>
                )
            case 'list':
                return (
                    <div
                        className={classNames(classes.articleListItem, {}, [
                            className,
                            classes[view],
                        ])}
                    >
                        <Card className={classes.card}>
                            <div className={classes.header}>
                                <Skeleton
                                    borderRadius={50}
                                    height={30}
                                    width={30}
                                />
                                <Skeleton
                                    className={classes.username}
                                    width={150}
                                    height={16}
                                />
                                <Skeleton
                                    className={classes.date}
                                    width={150}
                                    height={16}
                                />
                            </div>
                            <Skeleton
                                className={classes.title}
                                width={250}
                                height={24}
                            />
                            <Skeleton className={classes.image} height={200} />
                            <div className={classes.footer}>
                                <Skeleton
                                    className={classes.image}
                                    height={36}
                                    width={200}
                                />
                            </div>
                        </Card>
                    </div>
                )
            default:
                return null
        }
    }
)
ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton'
