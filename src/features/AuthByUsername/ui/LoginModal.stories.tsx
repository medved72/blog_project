import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { THEME } from 'shared/config/theme'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { action } from '@storybook/addon-actions'

const meta: ComponentMeta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,
}
export default meta

const Template: ComponentStory<typeof LoginModal> = (args) => {
    return <LoginModal {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    onClose: action('onClose'),
    onLoginSuccess: action('onLoginSuccess'),
    getModalContainer: () => document.querySelector('.sb-main-padded #root')!,
}
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    onClose: action('onClose'),
    onLoginSuccess: action('onLoginSuccess'),
    getModalContainer: () => document.querySelector('.sb-main-padded #root')!,
}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]
