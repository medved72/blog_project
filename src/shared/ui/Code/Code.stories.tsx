import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { Code } from './Code'

generateAppStories('shared/Code', Code, [
    {
        key: 'primary',
        args: {
            children:
                "import { type ComponentMeta, type ComponentStory } from '@storybook/react'\n" +
                "import { Code } from './Code'\n" +
                "import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'\n" +
                "import { THEME } from 'shared/config/theme'\n" +
                '\n' +
                'const meta: ComponentMeta<typeof Code> = {\n' +
                "    title: 'shared/Code',\n" +
                '    component: Code,\n' +
                '}\n' +
                'export default meta\n' +
                '\n' +
                'const Template: ComponentStory<typeof Code> = (args) => {\n' +
                '    return <Code {...args} />\n' +
                '}\n' +
                '\n' +
                'export const Primary = Template.bind({})\n' +
                'Primary.args = {\n' +
                "    children: 'Lorem',\n" +
                '}\n' +
                '\n' +
                'export const Dark = Template.bind({})\n' +
                'Dark.args = {\n' +
                "    children: 'Lorem',\n" +
                '}\n' +
                'Dark.decorators = [ThemeDecorator(THEME.DARK)]\n',
        },
    },
])
