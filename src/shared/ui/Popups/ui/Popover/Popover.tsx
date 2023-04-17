import { type FC, memo, type PropsWithChildren, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Popover as HUPopover } from '@headlessui/react'
import classes from './Popover.module.scss'
import {
    autoUpdate,
    flip,
    offset,
    type Placement,
    useFloating,
} from '@floating-ui/react-dom'

interface PopoverProps {
    className?: string
    direction?: Placement
    trigger: ReactNode
}

export const Popover: FC<PropsWithChildren<PopoverProps>> = memo((props) => {
    const { className, direction, trigger, children } = props

    const { x, y, strategy, refs } = useFloating({
        placement: direction,
        middleware: [offset(10), flip()],
        whileElementsMounted: autoUpdate,
    })

    return (
        <HUPopover
            className={classNames(classes.popover, {}, [className])}
            as="div"
        >
            <HUPopover.Button
                ref={refs.setReference}
                className={classes.trigger}
            >
                {trigger}
            </HUPopover.Button>
            <HUPopover.Panel
                ref={refs.setFloating}
                className={classes.panel}
                style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                }}
            >
                {children}
            </HUPopover.Panel>
        </HUPopover>
    )
})
Popover.displayName = 'Popover'
