import React, { type PropsWithChildren } from 'react'
import { classNames } from '@/shared/lib/classNames'
import classes from './Flex.module.scss'
import { capitalize } from '../../../lib/capitalize'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

export type FlexElements = 'div' | 'form' | 'nav' | 'header'

type FlexAdditionalProps<Type extends FlexElements | React.ComponentType> =
    Type extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[Type]
        : React.ComponentPropsWithoutRef<Type>

export type FlexProps<T extends FlexElements | React.ComponentType> = {
    className?: string
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    as?: T
    fullWidth?: boolean
    'data-testid'?: string
} & FlexAdditionalProps<T>

export const Flex = <T extends FlexElements | React.ComponentType>(
    props: PropsWithChildren<FlexProps<T>>
) => {
    const {
        className,
        children,
        align = 'center',
        direction = 'row',
        justify = 'start',
        gap,
        fullWidth,
        as: RootElement = 'div',
        'data-testid': dataTestId,
        ...restProps
    } = props

    return (
        <RootElement
            data-testid={dataTestId}
            className={classNames(
                classes.flex,
                { [classes.fullWidth]: fullWidth },
                [
                    className,
                    classes[`align${capitalize(align)}`],
                    classes[`justify${capitalize(justify)}`],
                    classes[`direction${capitalize(direction)}`],
                    gap && classes[`gap${capitalize(gap)}`],
                ]
            )}
            {...restProps}
        >
            {children}
        </RootElement>
    )
}
Flex.displayName = 'Flex'
