import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
    const { className } = props
    return (
        <div
            className={classNames(classes.articleDetailsPage, {}, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>ArticleDetailsPage</p>
        </div>
    )
})
ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
