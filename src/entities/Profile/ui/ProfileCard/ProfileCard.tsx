import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { Avatar } from '@/shared/ui/Avatar'
import { CountrySelect } from '@/shared/ui/CountrySelect'
import { CurrencySelect } from '@/shared/ui/CurrencySelect'
import { DotsSpinner } from '@/shared/ui/Spinner'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Input } from '@/shared/ui/Input'
import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames'

import { type ProfileCardProps } from '../../model/types/ProfileCardProps'

import classes from './ProfileCard.module.scss'

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
            <HStack
                className={classNames(classes.profileCard, {}, [
                    className,
                    classes.loading,
                ])}
                justify="center"
                fullWidth
            >
                <DotsSpinner />
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack
                className={classNames(classes.profileCard, {}, [
                    className,
                    classes.error,
                ])}
                justify="center"
                fullWidth
            >
                <Text
                    theme="error"
                    title={t('Произошла ошибка при загрузке страницы')}
                    text={t('Попробуйте обновить страницу')}
                    align="center"
                />
            </HStack>
        )
    }

    return (
        <VStack
            className={classNames(
                classes.profileCard,
                { [classes.edit]: !readonly },
                [className]
            )}
            gap="16"
            fullWidth
        >
            {profile?.avatar && (
                <HStack justify="center" fullWidth>
                    <Avatar
                        className={classes.avatar}
                        src={profile.avatar}
                        alt=""
                        firstName={profile.first}
                    />
                </HStack>
            )}
            <Input
                value={profile?.first ?? ''}
                placeholder={t('Ваше имя') + '>'}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />

            <Input
                value={profile?.lastname ?? ''}
                placeholder={t('Ваша фамилия') + '>'}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />

            <Input
                value={profile?.age ?? ''}
                placeholder={t('Ваш возраст') + '>'}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard.age"
            />

            <Input
                value={profile?.city ?? ''}
                placeholder={t('Город') + '>'}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid="ProfileCard.city"
            />

            <Input
                value={profile?.username ?? ''}
                placeholder={t('Введите имя пользователя') + '>'}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="ProfileCard.username"
            />

            <Input
                value={profile?.avatar ?? ''}
                placeholder={t('Введите ссылку на аватар') + '>'}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid="ProfileCard.avatarLink"
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
        </VStack>
    )
})
ProfileCard.displayName = 'ProfileCard'
