import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { withDynamicModuleLoader } from 'shared/lib/components'
import { articleRecommendationsReducer } from '../../model/slices/articleRecommendations.slice'
import {
    getArticleRecommendations,
    getArticleRecommendationsLoading,
} from '../../model/selectors'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import classes from './ArticleRecommendations.module.scss'
import { ArticleList } from 'entities/Article'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations'

interface ArticleRecommendationsProps {
    className?: string
}

const ArticleRecommendationsPlain: FC<ArticleRecommendationsProps> = memo(
    (props) => {
        const { className } = props

        const dispatch = useAppDispatch()

        const { t } = useTranslation('articleDetails')

        useEffect(() => {
            dispatch(fetchArticleRecommendations())
        }, [dispatch])

        const recommendations = useSelector(getArticleRecommendations.selectAll)

        const loading = useSelector(getArticleRecommendationsLoading)

        return (
            <div
                className={classNames(classes.articleRecommendations, {}, [
                    className,
                ])}
            >
                <Text
                    size="L"
                    title={t('article.recommendations.title.text')}
                />
                <ArticleList
                    loading={loading}
                    articles={recommendations}
                    target="_blank"
                />
            </div>
        )
    }
)
ArticleRecommendationsPlain.displayName = 'ArticleRecommendations'

export const ArticleRecommendations = withDynamicModuleLoader(
    ArticleRecommendationsPlain,
    {
        reducers: {
            articleRecommendations: articleRecommendationsReducer,
        },
    }
)
