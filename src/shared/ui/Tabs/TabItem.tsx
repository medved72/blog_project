import { memo, useCallback } from 'react'
import { Card } from '../Card'
import classes from './Tabs.module.scss'
import { CardTheme } from '../Card/ui/Card/Card'
import { type TabItemValue } from './Tabs'

export interface TabItemProps<T extends string> {
    isActive: boolean
    tab: TabItemValue<T>
    onClick: (tab: TabItemValue<T>) => void
}

const TabItemPlain = <T extends string>(props: TabItemProps<T>) => {
    const { tab, isActive, onClick } = props

    const handleClick = useCallback(() => {
        onClick(tab)
    }, [onClick, tab])

    return (
        <Card
            className={classes.tab}
            theme={isActive ? CardTheme.normal : CardTheme.outlined}
            onClick={handleClick}
        >
            {tab.content}
        </Card>
    )
}
TabItemPlain.displayName = 'TabItem'

export const TabItem = memo(TabItemPlain) as typeof TabItemPlain
