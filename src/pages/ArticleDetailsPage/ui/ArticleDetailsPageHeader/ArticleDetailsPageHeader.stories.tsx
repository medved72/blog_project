import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories(
    'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    ArticleDetailsPageHeader,
    [
        {
            key: 'primary',
            args: {},
        },
    ]
)
