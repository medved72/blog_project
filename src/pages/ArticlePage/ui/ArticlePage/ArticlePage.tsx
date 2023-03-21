import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticlePage.module.scss'
import { ArticleList } from 'entities/Article'

interface ArticlePageProps {
    className?: string
}

const ArticlePage: FC<ArticlePageProps> = memo((props) => {
    const { className } = props

    return (
        <div className={classNames(classes.articlePage, {}, [className])}>
            <ArticleList loading articles={[]} view="tile" />
        </div>
    )
})
ArticlePage.displayName = 'ArticlePage'

export default ArticlePage
