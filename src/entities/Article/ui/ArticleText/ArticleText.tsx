import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleText.module.scss'

interface ArticleTextProps {
    className?: string
}

export const ArticleText: FC<ArticleTextProps> = memo((props) => {
    const { className } = props
    return (
        <div className={classNames(classes.articleText, {}, [className])}></div>
    )
})
ArticleText.displayName = 'ArticleText'
