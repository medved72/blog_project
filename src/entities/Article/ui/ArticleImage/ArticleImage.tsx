import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleImage.module.scss'
import { type ArticleImageBlock } from '../../model'
import { Text } from 'shared/ui/Text'

interface ArticleImageProps {
    className?: string
    block: ArticleImageBlock
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