import { type ArticlesListViewState } from '../types/ArticlesListViewState'
import { getArticleListViewInitialState } from '../slices/getArticleListViewInitialState'

export const getArticleListViewState = (
    state: GlbAppState
): ArticlesListViewState =>
    state.articlesListView ?? getArticleListViewInitialState()
