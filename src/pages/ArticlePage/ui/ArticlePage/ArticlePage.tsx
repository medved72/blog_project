import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticlePage.module.scss'

interface ArticlePageProps {
    className?: string
}

const ArticlePage: FC<ArticlePageProps> = memo((props) => {
    const { className } = props
    return (
        <div className={classNames(classes.articlePage, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>ArticlePage</p>
        </div>
    )
})
ArticlePage.displayName = 'ArticlePage'

export default ArticlePage
