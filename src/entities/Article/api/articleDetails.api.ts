import { rtkApi } from '@/shared/api/rtkApi'

import { type Article } from '../model/types/article'

const articleDetailsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        articleById: build.query<Article, string>({
            query: (articleId) => ({
                url: `/articles/${articleId}`,
                params: {
                    _expand: 'user',
                },
            }),
        }),
    }),
})

export const {
    useArticleByIdQuery,
    endpoints: {
        articleById: { select: selectArticleById },
    },
} = articleDetailsApi
