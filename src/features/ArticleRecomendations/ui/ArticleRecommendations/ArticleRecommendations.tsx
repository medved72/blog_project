import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { type Article, ArticleList } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { useArticleRecommendationsListQuery } from '../../api/articleRecommendations.api'

interface ArticleRecommendationsProps {
    className?: string
}

const emptyArticles: Article[] = []

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo(
    (props) => {
        const { className } = props
        const { t } = useTranslation('articleDetails')
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationsListQuery(4)

        if (isLoading || error) {
            return null
        }

        return (
            <VStack className={className}>
                <Text
                    size="L"
                    title={t('article.recommendations.title.text')}
                />
                <ArticleList
                    articles={articles ?? emptyArticles}
                    loading={isLoading}
                    target="_blank"
                />
            </VStack>
        )
    }
)
ArticleRecommendations.displayName = 'ArticleRecommendations'
