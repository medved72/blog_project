import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleCreatePage.module.scss'

interface ArticleCreatePageProps {
    className?: string
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = memo((props) => {
    const { className } = props
    return (
        <div
            className={classNames(classes.articleCreatePage, {}, [className])}
        ></div>
    )
})
ArticleCreatePage.displayName = 'ArticleCreatePage'

export default ArticleCreatePage
