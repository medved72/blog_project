import { getArticleListViewInitialState } from '../slices/getArticleListViewInitialState'
import { type ArticlesListViewState } from '../types/ArticlesListViewState'

export const getArticleListViewState = (
    state: GlbAppState
): ArticlesListViewState =>
    state.articlesListView ?? getArticleListViewInitialState()
