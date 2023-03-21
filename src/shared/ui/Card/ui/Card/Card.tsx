import {
    type FC,
    type HTMLAttributes,
    memo,
    type PropsWithChildren,
} from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export const Card: FC<PropsWithChildren<CardProps>> = memo((props) => {
    const { className, children, ...restProps } = props
    return (
        <div
            {...restProps}
            className={classNames(classes.card, {}, [className])}
        >
            {children}
        </div>
    )
})
Card.displayName = 'Card'
