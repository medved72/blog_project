import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { type Profile, type ProfileErrors } from '../../model/types/profile'
import { DotsSpinner } from '../../../../shared/ui/Spinner'

interface ProfileCardProps {
    className?: string
    profile?: Profile
    loading?: boolean
    error?: ProfileErrors
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const { className, profile, error, loading } = props
    const { t } = useTranslation('profile')

    if (loading) {
        return (
            <div
                className={classNames(classes.profileCard, {}, [
                    className,
                    classes.loading,
                ])}
            >
                <DotsSpinner />
            </div>
        )
    }

    if (error) {
        const errorTitle = t(error, { ns: 'profile' })

        const errorText = t('Попробуйте обновить страницу', { ns: 'profile' })

        return (
            <div
                className={classNames(classes.profileCard, {}, [
                    className,
                    classes.error,
                ])}
            >
                <Text
                    theme="error"
                    title={errorTitle}
                    text={errorText}
                    align="center"
                />
            </div>
        )
    }

    return (
        <div className={classNames(classes.profileCard, {}, [className])}>
            <div className={classes.header}>
                <Text
                    className={classes.text}
                    title={t('Профиль', { ns: 'profile' })}
                />
                <Button theme="outline">
                    {t('Редактировать', { ns: 'profile' })}
                </Button>
            </div>

            <div className={classes.data}>
                <Input
                    value={profile?.first ?? ''}
                    placeholder={t('Ваше имя', { ns: 'profile' })}
                />

                <Input
                    value={profile?.lastname ?? ''}
                    placeholder={t('Ваша фамилия', { ns: 'profile' })}
                />
            </div>
        </div>
    )
})
ProfileCard.displayName = 'ProfileCard'
