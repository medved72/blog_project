import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
    actions as profileActions,
    selectors as profileSelectors,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack/HStack'
interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const readonly = useSelector(profileSelectors.readOnly)
    const profileData = useSelector(profileSelectors.profile)

    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const canEdit = authData?.id === profileData?.id

    const handleEditClick = useCallback(() => {
        dispatch(profileActions.setReadOnly(false))
    }, [dispatch])

    const handleCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const handleSaveEdit = useCallback(async () => {
        await dispatch(profileActions.updateProfileData())
    }, [dispatch])

    return (
        <HStack
            className={classNames('', {}, [className])}
            justify="between"
            fullWidth
        >
            <Text title={t('Профиль')} />
            {canEdit && (
                <HStack gap="16">
                    {readonly ? (
                        <Button theme="outline" onClick={handleEditClick}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme="outlineRed"
                                onClick={handleCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button theme="outline" onClick={handleSaveEdit}>
                                {t('Сохранить')}
                            </Button>
                        </>
                    )}
                </HStack>
            )}
        </HStack>
    )
})
ProfilePageHeader.displayName = 'ProfilePageHeader'
