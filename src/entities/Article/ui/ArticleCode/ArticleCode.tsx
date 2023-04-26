import { type FC, memo } from 'react'

import { Code } from '@/shared/ui/Code'
import { classNames } from '@/shared/lib/classNames'
import { type ArticleCodeBlockDto } from '@/shared/api/types'

import classes from './ArticleCode.module.scss'

interface ArticleCodeProps {
    className?: string
    block: ArticleCodeBlockDto
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
