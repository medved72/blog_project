export interface DatabaseDto {
    articles: DatabaseArticle[]
    profile: DatabaseProfile[]
    users: DatabaseUser[]
    comments: DatabaseArticleComment[]
    notifications: DatabaseNotification[]
    'article-ratings': DatabaseArticleRating[]
}

export interface DatabaseArticle {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    userId: string
    type: string[]
    blocks: DatabaseArticleBlock[]
}

export interface DatabaseArticleBlock {
    id: string
    type: string
    title?: string
    paragraphs?: string[]
    code?: string
    src?: string
}

export interface DatabaseProfile {
    id: string
    first: string
    lastname: string
    age: number
    currency: string
    country: string
    city: string
    username: string
    avatar: string
}

export interface DatabaseUser {
    id: string
    username: string
    password: string
    roles: string[]
    avatar: string
    jsonSettings?: DatabaseUserJsonSettings
    features: DatabaseUserFeatures
}

export interface DatabaseUserJsonSettings {
    theme: string
    isFirstVisit: boolean
    settingsPageHasBeenOpen: boolean
    isArticlesPageWasOpened: boolean
}

export interface DatabaseUserFeatures {
    isArticleRatingEnabled: boolean
    isCounterEnabled: boolean
}

export interface DatabaseArticleComment {
    id: string
    userId: string
    articleId: string
    text: string
}

export interface DatabaseNotification {
    id: string
    description: string
    title: string
    userId: string
    href?: string
}

export interface DatabaseArticleRating {
    articleId: string
    userId: string
    rate: number
    feedback: string
    id: string
}
