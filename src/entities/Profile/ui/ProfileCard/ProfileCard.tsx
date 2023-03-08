import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country, CountrySelect } from 'entities/Country'
import { type Profile, type ProfileErrors } from '../../model/types/profile'
import { DotsSpinner } from 'shared/ui/Spinner'
import { Avatar } from 'shared/ui/Avatar'

interface ProfileCardProps {
    className?: string
    profile?: Profile
    loading?: boolean
    error?: ProfileErrors
    readonly?: boolean
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (value?: Currency) => void
    onChangeCountry?: (value?: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const {
        className,
        profile,
        error,
        loading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
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
        <div
            className={classNames(
                classes.profileCard,
                { [classes.edit]: !readonly },
                [className]
            )}
        >
            <div className={classes.data}>
                {profile?.avatar && (
                    <Avatar
                        className={classes.avatar}
                        src={profile.avatar}
                        alt=""
                    />
                )}
                <Input
                    value={profile?.first ?? ''}
                    placeholder={t('Ваше имя') + '>'}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />

                <Input
                    value={profile?.lastname ?? ''}
                    placeholder={t('Ваша фамилия') + '>'}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />

                <Input
                    value={profile?.age ?? ''}
                    placeholder={t('Ваш возраст') + '>'}
                    onChange={onChangeAge}
                    readonly={readonly}
                />

                <Input
                    value={profile?.city ?? ''}
                    placeholder={t('Город') + '>'}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <Input
                    value={profile?.username ?? ''}
                    placeholder={t('Введите имя пользователя') + '>'}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />

                <Input
                    value={profile?.avatar ?? ''}
                    placeholder={t('Введите ссылку на аватар') + '>'}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />

                <CurrencySelect
                    value={profile?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    value={profile?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    )
})
ProfileCard.displayName = 'ProfileCard'
