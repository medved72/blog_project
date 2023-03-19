export const ROUTES = {
    MAIN: '/',
    ABOUT: '/about',
    PROFILE: '/profile/:id?',
    ARTICLES: '/articles',
    ARTICLE_DETAILS: '/articles/:articleId',
    NOT_FOUND: '*',
} satisfies Readonly<Record<string, Readonly<string>>>
