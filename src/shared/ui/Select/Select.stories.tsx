import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Select } from './Select'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { THEME } from '@/shared/config/theme'

const meta: ComponentMeta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
}
export default meta

const Template: ComponentStory<typeof Select> = (args) => {
    return <Select {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: '1' },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
}

export const Dark = Template.bind({})
Dark.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: '1' },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
