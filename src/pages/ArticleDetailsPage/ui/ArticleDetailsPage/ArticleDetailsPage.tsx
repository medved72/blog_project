import { type FC, memo } from 'react'

import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendations } from '@/features/ArticleRecomendations'

import { ArticleDetails } from '@/entities/Article'

import { VStack } from '@/shared/ui/Stack'
import { classNames } from '@/shared/lib/classNames'
import { toggleFeatures } from '@/shared/lib/featureFlags'

import { ArticleDetailsComments } from '../ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
    const { className } = props
    const { articleId } = useParams<{ articleId: string }>()
    const { t } = useTranslation('articleDetails')

    if (!articleId) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('articleDetails.errors.notFound')}
            </div>
        )
    }

    const articleRating = toggleFeatures({
        name: 'isArticleRatingEnabled',
        on: () => <ArticleRating articleId={articleId} />,
        off: () => null,
    })

    return (
        <VStack gap="16" className={classNames('', {}, [className])} fullWidth>
            <ArticleDetailsPageHeader id={articleId} />
            <ArticleDetails id={articleId} />
            {articleRating}
            <ArticleRecommendations />
            <ArticleDetailsComments articleId={articleId} />
        </VStack>
    )
})
ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
