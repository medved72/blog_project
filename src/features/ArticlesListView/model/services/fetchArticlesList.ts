import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleListViewErrors } from '../types/ArticlesListViewState'
import { type Article } from 'entities/Article'
import { getArticleListViewLimit } from '../selectors'

export const fetchArticlesList = createAsyncThunk<
    Article[],
    number,
    GlbThunkConfig<ArticleListViewErrors>
>('articlesListView/fetchArticlesList', async (page, thunkAPI) => {
    const limit = getArticleListViewLimit(thunkAPI.getState())
    try {
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: { _expand: 'user', _page: page, _limit: limit },
        })
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
})
