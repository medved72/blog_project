import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react'

import { useTranslation } from 'react-i18next'

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { AppImage } from '@/shared/ui/AppImage'
import { AppLink } from '@/shared/ui/Link'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames'
import { getArticleDetailsRoute } from '@/shared/config/routes'

import { ArticleText } from '../ArticleText'
import { type Article, type ArticleListViewMode } from '../../model'

import classes from './ArticleListItem.module.scss'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleListViewMode
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { className, article, view, target } = props
    const { t } = useTranslation('articleList')
    const firstTextBlock = article.blocks.find((block) => block.type === 'TEXT')

    switch (view) {
        case 'tile':
            return (
                <AppLink
                    target={target}
                    className={classNames(classes.articleListItem, {}, [
                        className,
                        classes[view],
                    ])}
                    to={getArticleDetailsRoute(article.id)}
                >
                    <Card>
                        <div className={classes.imageWrapper}>
                            <AppImage
                                className={classes.image}
                                src={article.img}
                                alt={article.title}
                                fallback={
                                    <Skeleton width="200px" height="200px" />
                                }
                            />
                            <Text
                                className={classes.date}
                                text={article.createdAt}
                            />
                        </div>
                        <div className={classes.infoWrapper}>
                            <Text
                                className={classes.types}
                                text={article.type.join(', ')}
                            />
                            <Text
                                className={classes.views}
                                text={article.views}
                            />
                            <Icon Svg={EyeIcon} />
                        </div>
                        <Text text={article.title} className={classes.title} />
                    </Card>
                </AppLink>
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
                            <Avatar
                                size={30}
                                src={article.user.avatar}
                                firstName={article.user.username}
                            />
                            <Text
                                className={classes.username}
                                text={article.user.username}
                            />
                            <Text
                                className={classes.date}
                                text={article.createdAt}
                            />
                        </div>
                        <Text className={classes.title} title={article.title} />
                        <Text
                            className={classes.types}
                            text={article.type.join(', ')}
                        />
                        <AppImage
                            className={classes.image}
                            src={article.img}
                            alt={article.title}
                            fallback={<Skeleton width="100%" height={250} />}
                        />
                        {firstTextBlock?.type === 'TEXT' && (
                            <ArticleText
                                className={classes.textBLock}
                                block={firstTextBlock}
                            />
                        )}
                        <div className={classes.footer}>
                            <AppLink
                                target={target}
                                to={getArticleDetailsRoute(article.id)}
                            >
                                <Button theme="outline">
                                    {t('button.text.readMore')}
                                </Button>
                            </AppLink>
                            <Text
                                className={classes.views}
                                text={article.views}
                            />
                            <Icon Svg={EyeIcon} />
                        </div>
                    </Card>
                </div>
            )
        default:
            return null
    }
})
ArticleListItem.displayName = 'ArticleListItem'
