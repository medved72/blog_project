import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'
import {
    useArticleRatingListByUserIdQuery,
    useRateArticleMutation,
} from '../../api/articleRating.api'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
    const { className, articleId } = props

    const { t } = useTranslation('articleDetails')

    const authData = useSelector(getUserAuthData)

    const { data, isLoading } = useArticleRatingListByUserIdQuery({
        articleId,
        userId: authData?.id ?? '',
    })

    const [rateArticle] = useRateArticleMutation()

    const handleAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            rateArticle({
                articleId,
                userId: authData?.id ?? '',
                rate: starsCount,
                feedback,
            })
        },
        [articleId, authData?.id, rateArticle]
    )

    const handleCancel = useCallback(
        (starsCount: number) => {
            rateArticle({
                articleId,
                userId: authData?.id ?? '',
                rate: starsCount,
            })
        },
        [articleId, authData?.id, rateArticle]
    )

    if (isLoading) {
        return <Skeleton width="100%" height={120} />
    }

    const rating = data?.[0]

    return (
        <RatingCard
            className={className}
            title={t('articleDetails.rating.title.notRated')}
            ratedTitle={t('articleDetails.rating.title.rated')}
            feedbackTitle={t('articleDetails.rating.feedbackTitle')}
            rate={rating?.rate}
            hasFeedback
            onAccept={handleAccept}
            onCancel={handleCancel}
        />
    )
})
ArticleRating.displayName = 'ArticleRating'

export default ArticleRating
