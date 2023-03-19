import AddCommentForm from './AddArticleCommentForm'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('features/AddCommentForm', AddCommentForm, [
    {
        key: 'primary',
        args: {},
    },
])
