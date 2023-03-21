import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleListItem.module.scss'
import { type Article, type ArticleListViewMode } from '../../model'
import { Text } from 'shared/ui/Text'
import { Icon } from 'shared/ui/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card'
import { Avatar } from 'shared/ui/Avatar'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ArticleText } from '../ArticleText'
import { generatePath, useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/config/routes'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleListViewMode
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { className, article, view } = props
    const { t } = useTranslation('articleList')
    const navigate = useNavigate()
    const firstTextBlock = article.blocks.find((block) => block.type === 'TEXT')

    const handleOpenArticle = useCallback(() => {
        navigate(
            generatePath(ROUTES.ARTICLE_DETAILS, { articleId: article.id })
        )
    }, [article.id, navigate])

    switch (view) {
        case 'tile':
            return (
                <div
                    className={classNames(classes.articleListItem, {}, [
                        className,
                        classes[view],
                    ])}
                >
                    <Card onClick={handleOpenArticle}>
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
                            <Button theme="outline" onClick={handleOpenArticle}>
                                {t('button.text.readMore')}
                            </Button>
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
