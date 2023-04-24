import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { type ArticleTextBlockDto } from '@/shared/api/types'
import { Text } from '../../../../shared/ui/Text'
import classes from './ArticleText.module.scss'

interface ArticleTextProps {
    className?: string
    block: ArticleTextBlockDto
}

export const ArticleText: FC<ArticleTextProps> = memo((props) => {
    const { className, block } = props
    return (
        <div className={classNames('', {}, [className])}>
            {block.title && (
                <Text className={classes.title} title={block.title} />
            )}
            {block.paragraphs.map((paragraph, index) => {
                return (
                    <Text
                        key={index}
                        text={paragraph}
                        className={classes.paragraph}
                    />
                )
            })}
        </div>
    )
})
ArticleText.displayName = 'ArticleText'
