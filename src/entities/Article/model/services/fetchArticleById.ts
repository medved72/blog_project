import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from '../types/article'
import { type ArticleDetailsStateError } from '../types/articleDetailsState'

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    GlbThunkConfig<ArticleDetailsStateError>
>('articleDetails/fetchArticleById', async (id, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get(`/articles/${id}`)
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
})
