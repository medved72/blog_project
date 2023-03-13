export const ROUTES = {
    MAIN: '/',
    ABOUT: '/about',
    PROFILE: '/profile',
    ARTICLES: '/articles',
    ARTICLE_DETAILS: '/articles/:articleId',
    NOT_FOUND: '*',
} satisfies Record<string, string>
