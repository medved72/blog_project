import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { type Profile, type ProfileErrors } from '../../model/types/profile'
import { DotsSpinner } from 'shared/ui/Spinner'

interface ProfileCardProps {
    className?: string
    profile?: Profile
    loading?: boolean
    error?: ProfileErrors
    readonly?: boolean
    onChangeFirstName: (value?: string) => void
    onChangeLastName: (value?: string) => void
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const {
        className,
        profile,
        error,
        loading,
        onChangeFirstName,
        onChangeLastName,
        readonly,
    } = props
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
        return (
            <div
                className={classNames(classes.profileCard, {}, [
                    className,
                    classes.error,
                ])}
            >
                <Text
                    theme="error"
                    title={t('Произошла ошибка при загрузке страницы')}
                    text={t('Попробуйте обновить страницу')}
                    align="center"
                />
            </div>
        )
    }

    return (
        <div className={classNames(classes.profileCard, {}, [className])}>
            <div className={classes.data}>
                <Input
                    value={profile?.first ?? ''}
                    placeholder={t('Ваше имя', { ns: 'profile' })}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />

                <Input
                    value={profile?.lastname ?? ''}
                    placeholder={t('Ваша фамилия', { ns: 'profile' })}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
            </div>
        </div>
    )
})
ProfileCard.displayName = 'ProfileCard'
