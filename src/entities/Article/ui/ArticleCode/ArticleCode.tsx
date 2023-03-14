import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleCode.module.scss'
import { type ArticleCodeBlock } from '../../model'

interface ArticleCodeProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCode: FC<ArticleCodeProps> = memo((props) => {
    const { className } = props
    return (
        <div className={classNames(classes.articleCode, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>ArticleCode</p>
        </div>
    )
})
ArticleCode.displayName = 'ArticleCode'
