import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User/model/selectors'
import { getArticleDetailsData } from 'entities/Article'
import { type Comment } from 'entities/Comment'
import { type AddArticleCommentFormError } from '../types/AddArticleCommentFormState'

export const sendArticleComment = createAsyncThunk<
    Comment,
    string,
    GlbThunkConfig<AddArticleCommentFormError>
>('addArticleCommentForm/sendArticleComment', async (text, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState())
    const article = getArticleDetailsData(thunkAPI.getState())
    if (!userData || !article) {
        return thunkAPI.rejectWithValue('unknown_error')
    }

    try {
        const response = await thunkAPI.extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        })
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('unknown_error')
    }
})