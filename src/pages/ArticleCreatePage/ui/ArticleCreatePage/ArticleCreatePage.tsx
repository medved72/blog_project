import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import classes from './ArticleCreatePage.module.scss'

interface ArticleCreatePageProps {
    className?: string
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = memo((props) => {
    const { className } = props
    return (
        <div className={classNames(classes.articleCreatePage, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            ArticleCreatePage
        </div>
    )
})
ArticleCreatePage.displayName = 'ArticleCreatePage'

export default ArticleCreatePage
