import { HStack } from './HStack'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('shared/Stack/HStack', HStack, [
    {
        key: 'primary',
        args: {
            gap: '4',
            children: (
                <>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </>
            ),
        },
    },
])
