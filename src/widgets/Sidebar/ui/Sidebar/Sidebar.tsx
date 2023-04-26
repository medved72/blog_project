import { type FC, memo, useCallback, useState } from 'react'

import { useSelector } from 'react-redux'

import { LanguageSwitcher } from '@/features/LanguageSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import { Button } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'
import { classNames } from '@/shared/lib/classNames/classNames'

import { SidebarItem } from '../SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

import classes from './Sidebar.module.scss'

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
        <aside
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
            <VStack className={classes.items} gap="8" as="nav">
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
        </aside>
    )
})
Sidebar.displayName = 'Sidebar'
