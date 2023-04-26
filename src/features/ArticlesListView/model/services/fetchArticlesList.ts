import axios, { type CancelTokenSource } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { type Article } from '@/entities/Article'

import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'

import {
    getArticleListViewLimit,
    getArticleListViewOrder,
    getArticleListViewPage,
    getArticleListViewSearch,
    getArticleListViewSort,
    getArticleListViewType,
} from '../selectors'
import { type ArticleListViewErrors } from '../types/ArticlesListViewState'

interface FetchArticlesListParams {
    replace?: boolean
}

let source: CancelTokenSource | undefined
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
    const type = getArticleListViewType(thunkAPI.getState())
    try {
        source?.cancel()
        source = axios.CancelToken.source()
        addQueryParams({ sortBy, sortOrder, search, type })
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _sort: sortBy,
                _order: sortOrder,
                q: search,
                type_like: type === 'All' ? undefined : type,
            },
            cancelToken: source.token,
        })
        return response.data
    } catch (e) {
        if (e instanceof axios.CanceledError) {
            return thunkAPI.rejectWithValue('CANCELED_ERROR')
        }
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
})
