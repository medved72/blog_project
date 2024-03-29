import { type FC, memo } from 'react'

import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames'
import { type ArticleImageBlockDto } from '@/shared/api/types'

import classes from './ArticleImage.module.scss'

interface ArticleImageProps {
    className?: string
    block: ArticleImageBlockDto
}

export const ArticleImage: FC<ArticleImageProps> = memo((props) => {
    const { className, block } = props
    return (
        <div className={classNames(classes.articleImage, {}, [className])}>
            <img className={classes.img} src={block.src} alt={block.title} />
            {block.title && <Text text={block.title} />}
        </div>
    )
})
ArticleImage.displayName = 'ArticleImage'
