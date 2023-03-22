import { getArticleListViewInitialState } from '../slices/articleListView.slice'

export const getArticleListViewState = (state: GlbAppState) =>
    state.articlesListView ?? getArticleListViewInitialState()
