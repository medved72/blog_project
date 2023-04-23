import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { VStack } from './VStack'

generateAppStories('shared/Stack/VStack', VStack, [
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
