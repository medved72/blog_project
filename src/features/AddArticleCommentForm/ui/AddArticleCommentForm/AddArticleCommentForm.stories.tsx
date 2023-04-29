import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { AddArticleCommentForm } from './AddArticleCommentForm'

generateAppStories('features/AddCommentForm', AddArticleCommentForm, [
    {
        key: 'primary',
        args: { articleId: '1' },
        decorators: [StoreDecorator({})],
    },
])
