import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleListViewErrors } from '../types/ArticlesListViewState'
import { type Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    GlbThunkConfig<ArticleListViewErrors>
>('articlesListView/fetchArticlesList', async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: { _expand: 'user' },
        })
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
})
