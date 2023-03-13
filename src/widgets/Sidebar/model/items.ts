import { type FC, type SVGAttributes } from 'react'
import { generatePath } from 'react-router-dom'
import { ROUTES } from 'shared/config/routes'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'

import { type TFuncKey } from 'i18next'
export interface Item {
    path: string
    i18nKey: TFuncKey<'translation'>
    icon: FC<SVGAttributes<SVGElement>>
    authOnly?: boolean
}

export const itemsList: Item[] = [
    {
        path: generatePath(ROUTES.MAIN),
        icon: MainIcon,
        i18nKey: 'Главная',
    },
    {
        path: generatePath(ROUTES.ABOUT),
        icon: AboutIcon,
        i18nKey: 'О нас',
    },
    {
        path: generatePath(ROUTES.PROFILE),
        icon: ProfileIcon,
        i18nKey: 'Профиль',
        authOnly: true,
    },
    {
        path: generatePath(ROUTES.ARTICLES),
        icon: ArticleIcon,
        i18nKey: 'Статьи',
        authOnly: true,
    },
]
