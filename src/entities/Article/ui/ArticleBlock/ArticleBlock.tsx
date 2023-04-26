import { type FC, memo } from 'react'

import { type ArticleBlockDto } from '@/shared/api/types'

import { ArticleCode } from '../ArticleCode'
import { ArticleImage } from '../ArticleImage'
import { ArticleText } from '../ArticleText'

import classes from './ArticleBlock.module.scss'

interface ArticleBlockProps {
    block: ArticleBlockDto
}

export const ArticleBlock: FC<ArticleBlockProps> = memo((props) => {
    switch (props.block.type) {
        case 'TEXT':
            return <ArticleText className={classes.block} block={props.block} />
        case 'CODE':
            return <ArticleCode className={classes.block} block={props.block} />
        case 'IMAGE':
            return (
                <ArticleImage className={classes.block} block={props.block} />
            )
        default:
            return null
    }
})
ArticleBlock.displayName = 'ArticleBlock'
