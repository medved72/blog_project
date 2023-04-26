import { action } from '@storybook/addon-actions'

import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { AddCommentForm } from './AddCommentForm'

generateAppStories('entities/Comment/AddCommentForm', AddCommentForm, [
    {
        key: 'primary',
        args: {
            onSendClick: action('onSendClick'),
            onCommentTextChange: action('onCommentTextChange'),
            value: 'value',
        },
    },
    {
        key: 'sending',
        args: {
            onSendClick: action('onSendClick'),
            onCommentTextChange: action('onCommentTextChange'),
            value: 'value',
            sending: true,
        },
    },
])
