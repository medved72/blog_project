import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink } from '@/shared/ui/Link'
import { classNames } from '@/shared/lib/classNames'
import classes from './SidebarItem.module.scss'
import { type Item } from '../../model/selectors/getSidebarItems'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'

interface SidebarItemProps {
    className?: string
    item: Item
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const { className, item, collapsed } = props
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const { icon: Icon } = item

    if (item.authOnly && !authData) {
        return null
    }

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
