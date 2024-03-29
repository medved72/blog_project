import { type FC, type SVGAttributes } from 'react'

import { createSelector } from '@reduxjs/toolkit'
import { type TFuncKey } from 'i18next'

import { getUserAuthData } from '@/entities/User'

import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import {
    getAboutRoute,
    getArticleListRoute,
    getMainRoute,
    getProfileRoute,
} from '@/shared/config/routes'
export interface Item {
    path: string
    i18nKey: TFuncKey<'translation'>
    icon: FC<SVGAttributes<SVGElement>>
    authOnly?: boolean
}

export const getSidebarItems = createSelector(
    getUserAuthData,
    (user): Item[] => {
        const items: Item[] = [
            {
                path: getMainRoute(),
                icon: MainIcon,
                i18nKey: 'Главная',
            },
            {
                path: getAboutRoute(),
                icon: AboutIcon,
                i18nKey: 'О нас',
            },
        ]

        if (user?.id) {
            items.push({
                path: getProfileRoute(user.id),
                icon: ProfileIcon,
                i18nKey: 'Профиль',
                authOnly: true,
            })
            items.push({
                path: getArticleListRoute(),
                icon: ArticleIcon,
                i18nKey: 'Статьи',
                authOnly: true,
            })
        }

        return items
    }
)
