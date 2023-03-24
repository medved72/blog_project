import { getArticleListViewInitialState } from '../slices/articleListView.slice'
import { type ArticlesListViewState } from '../types/ArticlesListViewState'

export const getArticleListViewState = (
    state: GlbAppState
): ArticlesListViewState =>
    state.articlesListView ?? getArticleListViewInitialState()
