import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { THEME } from '@/shared/config/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { CurrencySelect } from './CurrencySelect'

const meta: ComponentMeta<typeof CurrencySelect> = {
    title: 'shared/CurrencySelect',
    component: CurrencySelect,
}
export default meta

const Template: ComponentStory<typeof CurrencySelect> = (args) => {
    return <CurrencySelect {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
