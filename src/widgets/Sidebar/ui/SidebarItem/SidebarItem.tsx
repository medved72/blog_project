import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/Link'
import { classNames } from 'shared/lib/classNames'
import classes from './SidebarItem.module.scss'
import { type Item } from '../../model/items'

interface SidebarItemProps {
    className?: string
    item: Item
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const { className, item, collapsed } = props
    const { t } = useTranslation()
    const { icon: Icon } = item

    return (
        <AppLink
            className={classNames(
                classes.sidebarItem,
                { [classes.collapsed]: collapsed },
                [className]
            )}
            theme="invertedPrimary"
            to={item.path}
        >
            <Icon className={classes.icon} />
            <span>{t(item.i18nKey)}</span>
        </AppLink>
    )
})
SidebarItem.displayName = 'SidebarItem'
