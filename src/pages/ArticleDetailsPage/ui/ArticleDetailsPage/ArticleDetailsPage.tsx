import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArticleRecommendations } from '@/features/ArticleRecomendations'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'
import { VStack } from '@/shared/ui/Stack'
import { ArticleDetailsComments } from '../ArticleDetailsComments'

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

    return (
        <VStack gap="16" className={classNames('', {}, [className])} fullWidth>
            <ArticleDetailsPageHeader id={articleId} />
            <ArticleDetails id={articleId} />
            <ArticleRecommendations />
            <ArticleDetailsComments articleId={articleId} />
        </VStack>
    )
})
ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
