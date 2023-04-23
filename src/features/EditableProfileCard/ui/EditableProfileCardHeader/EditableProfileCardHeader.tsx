import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { classNames } from '@/shared/lib/classNames'
import { HStack } from '@/shared/ui/Stack'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import {
    getEditableProfileCardProfile,
    getEditableProfileCardReadOnly,
} from '../../model/selectors'
import { editableProfileCardActions } from '../../model/slice/editableProfileCard.slice'
import { updateProfileData } from '../../model/services/updateProfileData'

interface ProfilePageHeaderProps {
    className?: string
}

export const EditableProfileCardHeader: FC<ProfilePageHeaderProps> = memo(
    (props) => {
        const { className } = props
        const { t } = useTranslation('profile')
        const readonly = useSelector(getEditableProfileCardReadOnly)
        const profileData = useSelector(getEditableProfileCardProfile)

        const dispatch = useAppDispatch()
        const authData = useSelector(getUserAuthData)
        const canEdit = authData?.id === profileData?.id

        const handleEditClick = useCallback(() => {
            dispatch(editableProfileCardActions.setReadOnly(false))
        }, [dispatch])

        const handleCancelEdit = useCallback(() => {
            dispatch(editableProfileCardActions.cancelEdit())
        }, [dispatch])

        const handleSaveEdit = useCallback(async () => {
            await dispatch(updateProfileData())
        }, [dispatch])

        return (
            <HStack
                className={classNames('', {}, [className])}
                justify="between"
                fullWidth
            >
                <Text title={t('Профиль')} />
                {canEdit && (
                    <HStack
                        gap="16"
                        data-testid="EditableProfileCardHeader.actions"
                    >
                        {readonly ? (
                            <Button
                                theme="outline"
                                onClick={handleEditClick}
                                data-testid="EditableProfileCardHeader.editButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    theme="outlineRed"
                                    onClick={handleCancelEdit}
                                    data-testid="EditableProfileCardHeader.cancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme="outline"
                                    onClick={handleSaveEdit}
                                    data-testid="EditableProfileCardHeader.saveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                    </HStack>
                )}
            </HStack>
        )
    }
)
EditableProfileCardHeader.displayName = 'EditableProfileCardHeader'
