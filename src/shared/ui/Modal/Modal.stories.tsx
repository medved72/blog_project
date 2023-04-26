import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { THEME } from '@/shared/config/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Modal } from './Modal'

const meta: ComponentMeta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
}
export default meta

type ModalStory = ComponentStory<typeof Modal>
const Template: ModalStory = (args) => {
    return <Modal {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    isOpen: true,
    getModalContainer: () => document.querySelector('.sb-main-padded #root')!,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
    isOpen: true,
    getModalContainer: () => document.querySelector('.sb-main-padded #root')!,
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]
