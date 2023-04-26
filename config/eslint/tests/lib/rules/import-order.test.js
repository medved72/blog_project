/**
 * @fileoverview description
 * @author imxx
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/import-order'),
    RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const options = {
    groups: [
        { name: 'react', match: '^react$', order: 10 },
        { name: 'shared layer', match: '@/shared/.*', order: 35 },
        { name: 'entities layer', match: '@/entities/.*', order: 34 },
        { name: 'features layer', match: '@/features/.*', order: 33 },
        { name: 'widgets layer', match: '@/widgets/.*', order: 32 },
        { name: 'processes layer', match: '@/processes/.*', order: 31 },
        { name: 'app layer', match: '@/app/.*', order: 30 },
        {
            name: 'styles',
            match: '.*\\.scss',
            order: 50,
        },
        {
            name: 'relative imports',
            match: '(\\.|\\.\\.)+/.*',
            order: 40,
        },
        { name: 'packages', match: '.*', order: 20 },
    ],
}

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
})
ruleTester.run('import-order', rule, {
    valid: [
        {
            code: `import { memo } from 'react'

import { generatePath, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ROUTES } from '../../shared/config/routes'
import { getUserAuthData } from '../../entities/User'`,
            options: [options],
        },
    ],

    invalid: [
        {
            filename: `D:\\projects\\blog_project\\src\\features\\AddArticleCommentForm\\ui\\AddArticleCommentForm\\AddArticleCommentForm.tsx`,
            code: `
import { memo } from 'react'
import classes from './ArticleRating.module.scss'
import { classNames } from '@/shared/lib/classNames'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArticleRecommendations } from '@/features/ArticleRecomendations'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'
import { VStack } from '@/shared/ui/Stack'
import { ArticleDetailsComments } from '../ArticleDetailsComments'
import { ArticleRating1 } from '@/features/ArticleRating'
import { ArticleRating2 } from './ArticleRating'`,
            errors: [
                {
                    message: 'Порядок импортов неправильный',
                },
            ],
            options: [options],
            output: `
import { memo } from 'react'

import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ArticleRating1 } from '@/features/ArticleRating'
import { ArticleRecommendations } from '@/features/ArticleRecomendations'

import { ArticleDetails } from '@/entities/Article'

import { VStack } from '@/shared/ui/Stack'
import { classNames } from '@/shared/lib/classNames'

import { ArticleDetailsComments } from '../ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'
import { ArticleRating2 } from './ArticleRating'

import classes from './ArticleRating.module.scss'`,
        },
    ],
})
