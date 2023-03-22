import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticlesPage.module.scss'
import { ArticleList } from 'entities/Article'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
    const { className } = props

    return (
        <div className={classNames(classes.articlesPage, {}, [className])}>
            <ArticleList loading articles={[]} view="tile" />
        </div>
    )
})
ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
