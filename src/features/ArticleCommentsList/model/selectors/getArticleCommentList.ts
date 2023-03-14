import { getArticleCommentsListInitialState } from '../slices/articleCommentsList.slice'

export const getArticleCommentList = (state: GlbAppState) =>
    state.articleCommentList ?? getArticleCommentsListInitialState()
