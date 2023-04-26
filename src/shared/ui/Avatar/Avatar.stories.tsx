import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: ComponentMeta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
}
export default meta

const Template: ComponentStory<typeof Avatar> = (args) => {
    return <Avatar {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    size: 150,
    src:
        'https://media.istockphoto.com/id/1305665241/vector/' +
        'anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?' +
        's=170667a' +
        '&w=0&k=20' +
        '&c=hdSlOI6dkmjABHFBYK2ZsA0_-iSENg7k9u_Sa4R9GxY=',
}

export const Small = Template.bind({})
Small.args = {
    size: 50,
    src:
        'https://media.istockphoto.com/id/1305665241/vector/' +
        'anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?' +
        's=170667a' +
        '&w=0&k=20' +
        '&c=hdSlOI6dkmjABHFBYK2ZsA0_-iSENg7k9u_Sa4R9GxY=',
}
