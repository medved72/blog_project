import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ArticleRecommendationsError } from '../types/ArticleRecommendationsState'

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    GlbThunkConfig<ArticleRecommendationsError>
>('articleRecommendations/fetchArticleRecommendations', async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: 4,
            },
        })
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
})
