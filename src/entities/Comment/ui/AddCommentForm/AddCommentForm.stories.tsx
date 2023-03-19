import { AddCommentForm } from './AddCommentForm'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'

generateAppStories('entities/Comment/AddCommentForm', AddCommentForm, [
    {
        key: 'primary',
        args: {
            onSendClick: action('onSendClick'),
            onCommentTextChange: action('onCommentTextChange'),
            value: 'value',
        },
    },
])
