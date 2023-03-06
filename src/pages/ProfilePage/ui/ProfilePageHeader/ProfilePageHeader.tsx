import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
    actions as profileActions,
    selectors as profileSelectors,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const readonly = useSelector(profileSelectors.readOnly)
    const dispatch = useAppDispatch()

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
        <div
            className={classNames(classes.profilePageHeader, {}, [
                className,
                classes.header,
            ])}
        >
            <Text className={classes.text} title={t('Профиль')} />
            <div className={classes.actions}>
                {readonly ? (
                    <Button theme="outline" onClick={handleEditClick}>
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <>
                        <Button theme="outlineRed" onClick={handleCancelEdit}>
                            {t('Отменить')}
                        </Button>
                        <Button theme="outline" onClick={handleSaveEdit}>
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
})
ProfilePageHeader.displayName = 'ProfilePageHeader'
