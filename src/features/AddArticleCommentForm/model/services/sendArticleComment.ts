import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUserAuthData } from '@/entities/User'
import { selectArticleById } from '@/entities/Article'
import { type CommentDto } from '@/entities/Comment'

import { type AddArticleCommentFormError } from '../types/AddArticleCommentFormState'

interface SendArticleCommentParams {
    articleId: string
    text: string
}

export const sendArticleComment = createAsyncThunk<
    CommentDto,
    SendArticleCommentParams,
    GlbThunkConfig<AddArticleCommentFormError>
>(
    'addArticleCommentForm/sendArticleComment',
    async ({ articleId, text }, thunkAPI) => {
        const userData = getUserAuthData(thunkAPI.getState())

        const article = selectArticleById(articleId)(thunkAPI.getState()).data

        if (!userData || !article) {
            return thunkAPI.rejectWithValue('unknown_error')
        }

        try {
            const response = await thunkAPI.extra.api.post<CommentDto>(
                '/comments',
                {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                }
            )
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('unknown_error')
        }
    }
)
