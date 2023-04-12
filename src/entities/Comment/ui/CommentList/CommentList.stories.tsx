import { CommentList } from './CommentList'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('entities/Comment/CommentList', CommentList, [
    {
        key: 'primary',
        args: {
            comments: [
                {
                    user: { id: '1', username: 'username', roles: ['ADMIN'] },
                    id: '1',
                    text: 'comment text 1',
                },
                {
                    user: { id: '1', username: 'username', roles: ['ADMIN'] },
                    id: '2',
                    text: 'comment text 2',
                },
            ],
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
