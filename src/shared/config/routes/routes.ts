export const ROUTES = {
    MAIN: '/',
    ABOUT: '/about',
    PROFILE: '/profile/:profileId',
    ARTICLES: '/articles',
    ARTICLE_DETAILS: '/articles/:articleId',
    ARTICLE_CREATE: '/articles/new',
    ARTICLE_EDIT: '/articles/:articleId/edit',
    ADMIN_PANEL: '/admin-panel',
    FORBIDDEN: '/forbidden',
    NOT_FOUND: '*',
} satisfies Record<string, Readonly<string>>
