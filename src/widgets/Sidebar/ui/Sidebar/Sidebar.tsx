import { type FC, memo, useCallback, useState } from 'react'

import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { Button } from 'shared/ui/Button'

import { classNames } from 'shared/lib/classNames/classNames'

import { itemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem'

import classes from './Sidebar.module.scss'

export interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = useCallback(() => {
        setCollapsed((prev) => !prev)
    }, [])

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                classes.sidebar,
                { [classes.collapsed]: collapsed },
                [className]
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                className={classes.collapsedButton}
                onClick={toggle}
                theme="backgroundInverted"
                size="l"
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>
                {itemsList.map((item) => {
                    return (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    )
                })}
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    )
})
Sidebar.displayName = 'Sidebar'
