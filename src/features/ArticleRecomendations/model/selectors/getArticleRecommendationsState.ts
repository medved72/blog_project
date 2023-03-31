import { getArticleRecommendationsInitialState } from '../slices/articleRecommendations.slice'

export const getArticleRecommendationsState = (state: GlbAppState) =>
    state.articleRecommendations ?? getArticleRecommendationsInitialState()
