import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Link } from './Link'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof Link> = {
    title: 'shared/Link',
    component: Link,
    args: { to: '/' },
}
export default meta

const Template: ComponentStory<typeof Link> = (args) => {
    return <Link {...args} />
}

export const Primary = Template.bind({})
Primary.args = { children: 'Text' }

export const PrimaryDark = Template.bind({})
PrimaryDark.args = { children: 'Text' }
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const Secondary = Template.bind({})
Secondary.args = { theme: 'secondary', children: 'Text' }

export const SecondaryDark = Template.bind({})
SecondaryDark.args = { theme: 'secondary', children: 'Text' }
SecondaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const InvertedPrimary = Template.bind({})
InvertedPrimary.args = { theme: 'invertedPrimary', children: 'Text' }

export const InvertedPrimaryDark = Template.bind({})
InvertedPrimaryDark.args = { theme: 'invertedPrimary', children: 'Text' }
InvertedPrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const InvertedSecondary = Template.bind({})
InvertedSecondary.args = { theme: 'invertedSecondary', children: 'Text' }

export const InvertedSecondaryDark = Template.bind({})
InvertedSecondaryDark.args = { theme: 'invertedSecondary', children: 'Text' }
InvertedSecondaryDark.decorators = [ThemeDecorator(THEME.DARK)]
