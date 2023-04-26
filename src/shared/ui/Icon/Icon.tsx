import {
    type FC,
    type FunctionComponent,
    memo,
    type SVGAttributes,
} from 'react'

import { classNames } from '../../lib/classNames'

import classes from './Icon.module.scss'

interface IconProps extends Omit<SVGAttributes<SVGElement>, 'stroke'> {
    className?: string
    Svg: FunctionComponent<SVGAttributes<SVGElement>>
    stroke?: boolean
    inverted?: boolean
}

export const Icon: FC<IconProps> = memo((props) => {
    const { className, Svg, stroke, inverted, ...restProps } = props
    return (
        <Svg
            className={classNames(
                classes.icon,
                {
                    [classes.inverted]: inverted,
                    [classes.stroke]: stroke,
                    [classes.invertedStroke]: stroke && inverted,
                },
                [className]
            )}
            {...restProps}
        />
    )
})
Icon.displayName = 'Icon'
