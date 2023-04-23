import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { generatePath } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/shared/config/routes'
import { AppLink } from '@/shared/ui/Link'
import { type Article, type ArticleListViewMode } from '../../model'
import { ArticleText } from '../ArticleText'
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
                    to={generatePath(ROUTES.ARTICLE_DETAILS, {
                        articleId: article.id,
                    })}
                >
                    <Card>
                        <div className={classes.imageWrapper}>
                            <img
                                className={classes.image}
                                src={article.img}
                                alt={article.title}
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
                            <Avatar size={30} src={article.user.avatar} />
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
                        <img
                            className={classes.image}
                            src={article.img}
                            alt={article.title}
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
                                to={generatePath(ROUTES.ARTICLE_DETAILS, {
                                    articleId: article.id,
                                })}
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
