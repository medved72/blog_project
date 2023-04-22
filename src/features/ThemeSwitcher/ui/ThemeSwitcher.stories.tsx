import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeProviderDecorator } from '@/shared/config/storybook/ThemeProviderDecorator'
import { THEME } from '@/shared/config/theme'

const meta: ComponentMeta<typeof ThemeSwitcher> = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
}
export default meta

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => {
    return <ThemeSwitcher {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [ThemeProviderDecorator(THEME.LIGHT)]
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeProviderDecorator(THEME.DARK)]
