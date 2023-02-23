import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Text.module.scss'

type TextTheme = 'primary' | 'error'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    'data-testid'?: string
}
export const Text: FC<TextProps> = memo((props) => {
    const { className, text, title, theme = 'primary', ...restProps } = props

    return (
        <div
            {...restProps}
            className={classNames('', {}, [className, classes[theme]])}
        >
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    )
})
Text.displayName = 'Text'
