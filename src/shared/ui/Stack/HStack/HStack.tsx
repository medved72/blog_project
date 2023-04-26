import React, { type PropsWithChildren } from 'react'

import { Flex } from '../Flex'
import { type FlexElements, type FlexProps } from '../Flex/Flex'

export type HStackProps<T extends FlexElements | React.ComponentType> = Omit<
    FlexProps<T>,
    'direction'
>

export const HStack = <T extends FlexElements | React.ComponentType>(
    props: PropsWithChildren<HStackProps<T>>
) => {
    const { children, ...restProps } = props
    return (
        <Flex {...restProps} direction="row">
            {children}
        </Flex>
    )
}
HStack.displayName = 'HStack'
