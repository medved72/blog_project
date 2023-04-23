import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ArticleListViewErrors } from '../types/ArticlesListViewState'
import {
    getArticleListViewHasMore,
    getArticleListViewLoading,
    getArticleListViewPage,
} from '../selectors'
import { articlesListViewActions } from '../slices/articleListView.slice'
import { fetchArticlesList } from './fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    GlbThunkConfig<ArticleListViewErrors>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi

    const hasMore = getArticleListViewHasMore(getState())

    const page = getArticleListViewPage(getState())

    const isLoading = getArticleListViewLoading(getState())

    if (hasMore && !isLoading) {
        await dispatch(fetchArticlesList())
        dispatch(articlesListViewActions.setPage(page + 1))
    }
})
