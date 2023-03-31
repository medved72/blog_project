import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
    const { className } = props
    return (
        <div
            className={classNames(classes.articleEditPage, {}, [className])}
        ></div>
    )
})
ArticleEditPage.displayName = 'ArticleEditPage'

export default ArticleEditPage
