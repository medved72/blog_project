import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleImage.module.scss'
import { type ArticleImageBlock } from '../../model'

interface ArticleImageProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImage: FC<ArticleImageProps> = memo((props) => {
    const { className } = props
    return (
        <div className={classNames(classes.articleImage, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>ArticleImage</p>
        </div>
    )
})
ArticleImage.displayName = 'ArticleImage'
