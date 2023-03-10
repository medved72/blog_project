import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Text.module.scss'

type TextTheme = 'primary' | 'error'
type TextAlign = 'right' | 'left' | 'center'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    'data-testid'?: string
}
export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        title,
        theme = 'primary',
        align = 'left',
        ...restProps
    } = props

    return (
        <div
            data-testid="text"
            {...restProps}
            className={classNames('', {}, [
                className,
                classes[theme],
                classes[align],
            ])}
        >
            {title && (
                <p data-testid="text.title" className={classes.title}>
                    {title}
                </p>
            )}
            {text && (
                <p data-testid="text.text" className={classes.text}>
                    {text}
                </p>
            )}
        </div>
    )
})
Text.displayName = 'Text'
