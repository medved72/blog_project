import { getAddCommentFormInitialState } from '../slices/addCommentForm.slice'

export const getAddArticleCommentFormState = (state: GlbAppState) =>
    state.addArticleCommentForm ?? getAddCommentFormInitialState()
