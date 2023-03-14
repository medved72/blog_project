import { Skeleton } from './Skeleton'
import { generateAppStories } from '../../config/storybook/generateAppStories'

generateAppStories('shared/Skeleton', Skeleton, [
    {
        key: `primary`,
        args: {
            width: '100%',
            height: 200,
        },
    },
    {
        key: `circle`,
        args: { borderRadius: '50%', width: 100, height: 100 },
    },
])
