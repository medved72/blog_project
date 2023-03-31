import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import {
    ArticleCommentsList,
    fetchCommentsListByArticleId,
} from 'features/ArticleCommentsList'
import { AddArticleCommentForm } from 'features/AddArticleCommentForm'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { ArticleRecommendations } from 'features/ArticleRecomendations'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
    const { className } = props
    const { articleId } = useParams<{ articleId: string }>()
    const { t } = useTranslation('articleDetails')
    const dispatch = useAppDispatch()

    const handleCommentAdded = useCallback(async () => {
        if (!articleId) return
        await dispatch(fetchCommentsListByArticleId(articleId))
    }, [articleId, dispatch])

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
            <ArticleDetailsPageHeader id={articleId} />
            <ArticleDetails id={articleId} />
            <ArticleRecommendations />
            <Text
                size="L"
                className={classes.commentTitle}
                title={t('comments.title')}
            />
            <AddArticleCommentForm onCommentAdded={handleCommentAdded} />
            <ArticleCommentsList articleId={articleId} />
        </div>
    )
})
ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
