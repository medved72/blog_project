import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleImage.module.scss'

interface ArticleImageProps {
    className?: string
}

export const ArticleImage: FC<ArticleImageProps> = memo((props) => {
    const { className } = props
    return (
        <div
            className={classNames(classes.articleImage, {}, [className])}
        ></div>
    )
})
ArticleImage.displayName = 'ArticleImage'
