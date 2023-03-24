import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '../../../../app/providers/StoreProvider/types'
import { type ArticleListViewErrors } from '../types/ArticlesListViewState'
import {
    getArticleListViewHasMore,
    getArticleListViewLoading,
    getArticleListViewPage,
} from '../selectors'
import { setArticleListViewPage } from '../slices/articleListView.slice'
import { fetchArticlesList } from './fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<ArticleListViewErrors>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticleListViewHasMore(getState())
    const page = getArticleListViewPage(getState())
    const isLoading = getArticleListViewLoading(getState())

    if (hasMore && !isLoading) {
        await dispatch(fetchArticlesList(page + 1))
        dispatch(setArticleListViewPage(page + 1))
    }
})
