import {
    articleRecommendationsAdapter,
    getArticleRecommendationsInitialState,
} from '../slices/articleRecommendations.slice'

export const getArticleRecommendations =
    articleRecommendationsAdapter.getSelectors(
        (state: GlbAppState) =>
            state.articleRecommendations ??
            getArticleRecommendationsInitialState()
    )
