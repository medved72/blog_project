import { memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Tabs.module.scss'
import { TabItem } from './TabItem'

export interface TabItemValue<T extends string = string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string = string> {
    className?: string
    tabs: Array<TabItemValue<T>>
    value: string
    onTabClick: (tab: TabItemValue<T>) => void
}

const TabsPlain = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, onTabClick, value } = props

    return (
        <div className={classNames(classes.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <TabItem
                    key={tab.value}
                    tab={tab}
                    onClick={onTabClick}
                    isActive={tab.value === value}
                />
            ))}
        </div>
    )
}
TabsPlain.displayName = 'Tabs'

export const Tabs = memo(TabsPlain) as typeof TabsPlain
