import {
    type FC,
    type FunctionComponent,
    memo,
    type SVGAttributes,
} from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: FunctionComponent<SVGAttributes<SVGElement>>
    stroke?: boolean
}

export const Icon: FC<IconProps> = memo((props) => {
    const { className, Svg, stroke } = props
    return (
        <Svg
            className={classNames(classes.icon, { [classes.stroke]: stroke }, [
                className,
            ])}
        />
    )
})
Icon.displayName = 'Icon'
