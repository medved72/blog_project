import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleListViewErrors } from '../types/ArticlesListViewState'
import { type Article } from 'entities/Article'
import {
    getArticleListViewLimit,
    getArticleListViewOrder,
    getArticleListViewPage,
    getArticleListViewSearch,
    getArticleListViewSort,
} from '../selectors'
import { addQueryParams } from '../../../../shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticlesListParams {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListParams | void,
    GlbThunkConfig<ArticleListViewErrors>
>('articlesListView/fetchArticlesList', async (params, thunkAPI) => {
    const limit = getArticleListViewLimit(thunkAPI.getState())
    const page = getArticleListViewPage(thunkAPI.getState())
    const sortBy = getArticleListViewSort(thunkAPI.getState())
    const sortOrder = getArticleListViewOrder(thunkAPI.getState())
    const search = getArticleListViewSearch(thunkAPI.getState())

    try {
        addQueryParams({
            sortBy,
            sortOrder,
            search,
        })
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _sort: sortBy,
                _order: sortOrder,
                q: search,
            },
        })
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
})
