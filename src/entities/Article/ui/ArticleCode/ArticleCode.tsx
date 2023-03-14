import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleCode.module.scss'

interface ArticleCodeProps {
    className?: string
}

export const ArticleCode: FC<ArticleCodeProps> = memo((props) => {
    const { className } = props
    return (
        <div className={classNames(classes.articleCode, {}, [className])}></div>
    )
})
ArticleCode.displayName = 'ArticleCode'
