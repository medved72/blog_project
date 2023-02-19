import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal
}
export default meta

type ModalStory = ComponentStory<typeof Modal>
const Template: ModalStory = (args) => {
  return <Modal {...args}/>
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  isOpen: true,
  getModalContainer: () => document.querySelector('.sb-main-padded #root')!
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
  isOpen: true,
  getModalContainer: () => document.querySelector('.sb-main-padded #root')!
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]
