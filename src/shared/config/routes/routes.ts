import { generatePath } from 'react-router-dom'

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

export const getMainRoute = () => generatePath(ROUTES.MAIN)

export const getAboutRoute = () => generatePath(ROUTES.ABOUT)

export const getProfileRoute = (profileId: string) =>
    generatePath(ROUTES.PROFILE, { profileId })

export const getArticleListRoute = () => generatePath(ROUTES.ARTICLES)

export const getArticleDetailsRoute = (articleId: string) =>
    generatePath(ROUTES.ARTICLE_DETAILS, { articleId })

export const getArticleCreateRoute = () => generatePath(ROUTES.ARTICLE_CREATE)

export const getArticleEditRoute = (articleId: string) =>
    generatePath(ROUTES.ARTICLE_EDIT, { articleId })

export const getAdminPanelRoute = () => generatePath(ROUTES.ADMIN_PANEL)

export const getForbiddenRoute = () => generatePath(ROUTES.FORBIDDEN)
