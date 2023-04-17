import { type FC, memo, useCallback } from 'react'
import { Avatar } from 'shared/ui/Avatar'
import { generatePath } from 'react-router-dom'
import { ROUTES } from 'shared/config/routes'
import { Dropdown } from 'shared/ui/Popups'
import { useSelector } from 'react-redux'
import {
    actions as userActions,
    getCanViewAdminPanel,
    getUserAuthData,
} from 'entities/User'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
    const { className } = props

    const dispatch = useAppDispatch()

    const { t } = useTranslation()

    const authData = useSelector(getUserAuthData)
    const isCanViewAdminPanel = useSelector(getCanViewAdminPanel)

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            className={className}
            direction="bottom-end"
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
                ...(isCanViewAdminPanel
                    ? [
                          {
                              content: t('navbar.item.adminPanel'),
                              href: generatePath(ROUTES.ADMIN_PANEL, {}),
                          },
                      ]
                    : []),
                {
                    content: t('navbar.item.profile'),
                    href: generatePath(ROUTES.PROFILE, {
                        profileId: authData.id,
                    }),
                },
                {
                    content: t('Выйти'),
                    onClick: handleLogout,
                },
            ]}
        />
    )
})
AvatarDropdown.displayName = 'AvatarDropdown'
