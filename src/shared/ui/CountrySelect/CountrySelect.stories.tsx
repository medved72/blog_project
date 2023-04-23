import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { THEME } from '@/shared/config/theme'
import { CountrySelect } from './CountrySelect'

const meta: ComponentMeta<typeof CountrySelect> = {
    title: 'shared/CountrySelect',
    component: CountrySelect,
}
export default meta

const Template: ComponentStory<typeof CountrySelect> = (args) => {
    return <CountrySelect {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
