import { Menu } from '@headlessui/react'
import { type FC, Fragment, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Dropdown.module.scss'
import { type DropdownDirection } from 'shared/types/ui'
import { capitalize } from '../../../../lib/capitalize'
import { AppLink } from '../../../Link'
import { Button } from '../../../Button'

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
    direction?: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = (props) => {
    const { className, items, trigger, direction = 'bottomRight' } = props

    return (
        <Menu
            as="div"
            className={classNames(classes.dropdown, {}, [className])}
        >
            <Menu.Button className={classes.button}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(classes.menu, {}, [
                    classes[`direction${capitalize(direction)}`],
                ])}
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
