import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { AddArticleCommentForm } from './AddArticleCommentForm'

generateAppStories('features/AddCommentForm', AddArticleCommentForm, [
    {
        key: 'primary',
        args: {},
        decorators: [StoreDecorator({})],
    },
])
