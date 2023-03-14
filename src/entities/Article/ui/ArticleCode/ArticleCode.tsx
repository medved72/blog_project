import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleCode.module.scss'
import { type ArticleCodeBlock } from '../../model'
import { Code } from 'shared/ui/Code'

interface ArticleCodeProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCode: FC<ArticleCodeProps> = memo((props) => {
    const { className, block } = props
    return (
        <div className={classNames(classes.articleCode, {}, [className])}>
            <Code>{block.code}</Code>
        </div>
    )
})
ArticleCode.displayName = 'ArticleCode'
