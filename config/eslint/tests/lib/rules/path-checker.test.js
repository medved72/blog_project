'use strict'

const rule = require('../../../lib/rules/path-checker'),
    RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
})
ruleTester.run('path-checker', rule, {
    valid: [
        {
            filename: 'C:\\project\\src\\entities\\Article',
            code: "import {Something} from '../../model/slices/addCommentFormSlice'",
            errors: [],
        },
    ],

    invalid: [
        {
            filename: 'C:\\project\\src\\entities\\Article',
            code: "import {Something} from '@/entities/Article/model/slices/addCommentFormSlice'",
            errors: [
                {
                    message:
                        'В рамках одного слайса все пути должны быть относительными',
                },
            ],
            options: [{ alias: '@' }],
            output: "import {Something} from './model/slices/addCommentFormSlice'",
        },
        {
            filename: 'C:\\project\\src\\entities\\Article',
            code: "import {Something} from 'entities/Article/model/slices/addCommentFormSlice'",
            errors: [
                {
                    message:
                        'В рамках одного слайса все пути должны быть относительными',
                },
            ],
            output: "import {Something} from './model/slices/addCommentFormSlice'",
        },
        {
            filename:
                'D:\\projects\\blog_project\\src\\features\\ArticlesListView\\ui\\ArticlesListView\\ArticlesListView.tsx',
            code: "import { articlesListViewActions, articlesListViewReducer, getArticlesList } from '@/features/ArticlesListView/model/slices/articleListView.slice'",
            errors: [
                {
                    message:
                        'В рамках одного слайса все пути должны быть относительными',
                },
            ],
            options: [{ alias: '@' }],
            output: "import { articlesListViewActions, articlesListViewReducer, getArticlesList } from '../../model/slices/articleListView.slice'",
        },
        {
            filename:
                'D:\\projects\\blog_project\\src\\entities\\Article\\ui\\ArticleDetails\\ArticleDetails.tsx',
            code: `
                import { memo, useEffect } from 'react'
    
                import { useSelector } from 'react-redux'
                import { useTranslation } from 'react-i18next'
                
                import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
                import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
                import { Avatar } from '@/shared/ui/Avatar'
                import { HStack, VStack } from '@/shared/ui/Stack'
                import { Icon } from '@/shared/ui/Icon'
                import { Skeleton } from '@/shared/ui/Skeleton'
                import { Text } from '@/shared/ui/Text'
                import { classNames } from '@/shared/lib/classNames'
                import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
                import { withDynamicModuleLoader } from '@/shared/lib/components'
                
                import { ArticleBlock } from '../ArticleBlock'
                
                import classes from './ArticleDetails.module.scss'
                import {
                    fetchArticleById,
                    useArticleDetailsData,
                    useArticleDetailsError,
                    useArticleDetailsLoading,
                } from '@/entities/Article/model'
            `,
            errors: [
                {
                    message:
                        'В рамках одного слайса все пути должны быть относительными',
                },
            ],
            options: [{ alias: '@' }],
            output: `
                import { memo, useEffect } from 'react'
    
                import { useSelector } from 'react-redux'
                import { useTranslation } from 'react-i18next'
                
                import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
                import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
                import { Avatar } from '@/shared/ui/Avatar'
                import { HStack, VStack } from '@/shared/ui/Stack'
                import { Icon } from '@/shared/ui/Icon'
                import { Skeleton } from '@/shared/ui/Skeleton'
                import { Text } from '@/shared/ui/Text'
                import { classNames } from '@/shared/lib/classNames'
                import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
                import { withDynamicModuleLoader } from '@/shared/lib/components'
                
                import { ArticleBlock } from '../ArticleBlock'
                
                import classes from './ArticleDetails.module.scss'
                import {
                    fetchArticleById,
                    useArticleDetailsData,
                    useArticleDetailsError,
                    useArticleDetailsLoading,
                } from '../../model'
            `,
        },
    ],
})
