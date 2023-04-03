import { type FC, memo, useCallback, useState } from 'react'

import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { Button } from 'shared/ui/Button'

import { classNames } from 'shared/lib/classNames/classNames'

import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem'

import classes from './Sidebar.module.scss'
import { useSelector } from 'react-redux'
import { VStack } from 'shared/ui/Stack'

export interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const sidebarItems = useSelector(getSidebarItems)

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
            <VStack className={classes.items} gap="8">
                {sidebarItems.map((item) => {
                    return (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    )
                })}
            </VStack>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    )
})
Sidebar.displayName = 'Sidebar'
