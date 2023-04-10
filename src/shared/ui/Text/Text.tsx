import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Text.module.scss'

type TextTheme = 'primary' | 'error' | 'inverted'
type TextAlign = 'right' | 'left' | 'center'
type TextSize = 'M' | 'L' | 'S'

interface TextProps {
    className?: string
    title?: string
    text?: string | number
    theme?: TextTheme
    size?: TextSize
    align?: TextAlign
    'data-testid'?: string
}

type TextHeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, TextHeaderTag> = {
    S: 'h3',
    M: 'h2',
    L: 'h1',
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        title,
        size = 'M',
        theme = 'primary',
        align = 'left',
        'data-testid': dataTestId = 'text',
        ...restProps
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div
            data-testid="text"
            {...restProps}
            className={classNames('', {}, [
                className,
                classes[theme],
                classes[align],
                classes[`size${size}`],
            ])}
        >
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.title`}
                    className={classes.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p data-testid={`${dataTestId}.text`} className={classes.text}>
                    {text}
                </p>
            )}
        </div>
    )
})
Text.displayName = 'Text'
