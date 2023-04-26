import { type FC, Fragment, type ReactNode } from 'react'

import {
    flip,
    offset,
    type Placement,
    useFloating,
} from '@floating-ui/react-dom'
import { Menu } from '@headlessui/react'

import { AppLink } from '../../../Link'
import { Button } from '../../../Button'
import { classNames } from '../../../../lib/classNames'

import classes from './Dropdown.module.scss'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: Placement
}

export const Dropdown: FC<DropdownProps> = (props) => {
    const { className, items, trigger, direction } = props

    const { x, y, strategy, refs } = useFloating({
        placement: direction,
        middleware: [offset(10), flip()],
    })

    return (
        <Menu
            as="div"
            className={classNames(classes.dropdown, {}, [className])}
        >
            <Menu.Button ref={refs.setReference} className={classes.button}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(classes.menu, {}, [])}
                ref={refs.setFloating}
                style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    width: 'max-content',
                }}
            >
                {items.map((item, index) => {
                    return (
                        <DropdownMenuItem
                            key={index}
                            className={classes.item}
                            activeClassName={classes.active}
                            item={item}
                        />
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
Dropdown.displayName = 'Dropdown'

interface DropdownMenuItemProps {
    className?: string
    item: DropdownItem
    activeClassName?: string
}

const DropdownMenuItem: FC<DropdownMenuItemProps> = (props) => {
    const {
        className,
        activeClassName,
        item: { content, href, onClick, disabled },
    } = props

    if (href) {
        return (
            <Menu.Item disabled={disabled} as={AppLink} to={href}>
                {({ active }) => (
                    <div
                        className={classNames(
                            '',
                            { [activeClassName ?? '']: active },
                            [className]
                        )}
                    >
                        {content}
                    </div>
                )}
            </Menu.Item>
        )
    }

    return (
        <Menu.Item disabled={disabled} as={Fragment}>
            {({ active }) => (
                <Button
                    className={classNames(
                        '',
                        { [activeClassName ?? '']: active },
                        [className]
                    )}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {content}
                </Button>
            )}
        </Menu.Item>
    )
}
