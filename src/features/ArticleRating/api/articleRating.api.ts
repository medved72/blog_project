import { type RatingDto } from '@/entities/Rating'

import { rtkApi } from '@/shared/api/rtkApi'

interface ArticleRatingByUserIdParams {
    articleId: string
    userId: string
}

interface RateArticleParams {
    articleId: string
    userId: string
    rate: number
    feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        articleRatingListByUserId: build.query<
            RatingDto[],
            ArticleRatingByUserIdParams
        >({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: { userId, articleId },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleParams>({
            query: (body) => ({
                url: '/article-ratings',
                method: 'post',
                body,
            }),
        }),
    }),
})

export const { useArticleRatingListByUserIdQuery, useRateArticleMutation } =
    articleRatingApi
