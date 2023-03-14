import { CommentList } from './CommentList'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('entities/CommentList', CommentList, [
    {
        key: 'primary',
        args: {
            comments: [
                {
                    user: { id: '1', username: 'username' },
                    id: '1',
                    text: 'comment text 1',
                },
                {
                    user: { id: '1', username: 'username' },
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
