import React, { type PropsWithChildren } from 'react'
import { Flex } from '../Flex'
import { type FlexElements, type FlexProps } from '../Flex/Flex'

export type VStackProps<T extends FlexElements | React.ComponentType> = Omit<
    FlexProps<T>,
    'direction'
>

export const VStack = <T extends FlexElements | React.ComponentType>(
    props: PropsWithChildren<VStackProps<T>>
) => {
    const { children, align = 'start', ...restProps } = props
    return (
        <Flex {...restProps} direction="column" align={align}>
            {children}
        </Flex>
    )
}
VStack.displayName = 'VStack'
