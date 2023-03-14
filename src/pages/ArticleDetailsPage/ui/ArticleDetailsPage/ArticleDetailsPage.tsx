import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
    const { className } = props
    const { articleId } = useParams<{ articleId: string }>()
    const { t } = useTranslation('articleDetails')

    if (!articleId) {
        return (
            <div
                className={classNames(classes.articleDetailsPage, {}, [
                    className,
                ])}
            >
                {t('articleDetails.errors.notFound')}
            </div>
        )
    }

    return (
        <div
            className={classNames(classes.articleDetailsPage, {}, [className])}
        >
            <ArticleDetails id={articleId} />
        </div>
    )
})
ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
