import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from '@/entities/User'
import { selectArticleById } from '@/entities/Article'

export const getCanEditArticle = (articleId: string) =>
    createSelector(
        selectArticleById(articleId),
        getUserAuthData,
        (article, user) => {
            if (!article.data || !user) {
                return false
            }

            return article.data.user.id === user.id
        }
    )
