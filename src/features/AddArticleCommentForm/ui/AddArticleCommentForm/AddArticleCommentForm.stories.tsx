import { AddArticleCommentForm } from './AddArticleCommentForm'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

generateAppStories('features/AddCommentForm', AddArticleCommentForm, [
    {
        key: 'primary',
        args: {},
        decorators: [StoreDecorator({})],
    },
])
