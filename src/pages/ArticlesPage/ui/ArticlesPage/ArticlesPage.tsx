import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticlesPage.module.scss'
import { ArticlesListView } from 'features/ArticlesListView'
import { ArticlesListFilters } from 'widgets/ArticlesListFilters'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
    const { className } = props

    return (
        <div className={classNames(classes.articlesPage, {}, [className])}>
            <ArticlesListFilters />
            <ArticlesListView className={classes.list} />
        </div>
    )
})
ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
