import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'
import ProfilePage from './ProfilePage'

const meta: ComponentMeta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        mockData: [
            {
                url: '/profile',
                method: 'GET',
                status: 200,
                response: {
                    first: 'Дмитрий',
                    lastname: 'Бобырев',
                    age: 24,
                    currency: 'RUB',
                    country: 'Russia',
                    city: 'Tyumen',
                    username: 'admin',
                    avatar:
                        'https://media.istockphoto.com/id/1305665241/vector' +
                        '/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg' +
                        '?s=170667a&w=0&k=20&c=hdSlOI6dkmjABHFBYK2ZsA0_-iSENg7k9u_Sa4R9GxY=',
                },
            },
        ],
    },
}
export default meta

const Template: ComponentStory<typeof ProfilePage> = (args) => {
    return <ProfilePage {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({})]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]
