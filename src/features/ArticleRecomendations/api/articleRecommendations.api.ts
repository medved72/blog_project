import { rtkApi } from 'shared/api/rtkApi'
import { type Article } from 'entities/Article'

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        articleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const { useArticleRecommendationsListQuery } = articleRecommendationsApi
