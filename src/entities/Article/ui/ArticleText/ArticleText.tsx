import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleText.module.scss'
import { type ArticleTextBlock } from '../../model'
import { Text } from '../../../../shared/ui/Text'

interface ArticleTextProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleText: FC<ArticleTextProps> = memo((props) => {
    const { className, block } = props
    return (
        <div className={classNames(classes.articleText, {}, [className])}>
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
