import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { sendArticleComment } from '../services/sendArticleComment'
import { type AddArticleCommentFormState } from '../types/AddArticleCommentFormState'

export const initialState: AddArticleCommentFormState = {
    error: undefined,
    text: '',
}

const addArticleCommentFormSlice = createSlice({
    name: 'addArticleCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(sendArticleComment.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(sendArticleComment.fulfilled, (state) => {
                state.loading = false
                state.text = ''
            })
            .addCase(sendArticleComment.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            }),
})

export const {
    reducer: addArticleCommentFormReducer,
    getInitialState: getAddCommentFormInitialState,
    actions: { setText: setAddArticleCommentFormText },
} = addArticleCommentFormSlice
