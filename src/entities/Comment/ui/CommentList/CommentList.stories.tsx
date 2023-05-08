import { articlesMock } from '@/entities/Article/testing'

import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { CommentList } from './CommentList'
import { getCommentsByArticleId } from '../../testing'

generateAppStories('entities/Comment/CommentList', CommentList, [
    {
        key: 'primary',
        args: {
            comments: getCommentsByArticleId(articlesMock[0].id),
            isLoading: false,
        },
    },
    {
        key: 'loading',
        args: {
            comments: [],
            isLoading: true,
        },
    },
])
