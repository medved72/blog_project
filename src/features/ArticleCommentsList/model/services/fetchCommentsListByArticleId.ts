import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleCommentListError } from '../types/ArticleCommentListState'
import { type CommentDto } from 'entities/Comment'

export const fetchCommentsListByArticleId = createAsyncThunk<
    CommentDto[],
    string,
    GlbThunkConfig<ArticleCommentListError>
>(
    'articleCommentsList/fetchCommentsListByArticleId',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<CommentDto[]>(
                `/comments`,
                {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                }
            )
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
        }
    }
)
