import { type FC, memo, useCallback, useEffect, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames'
import { withDynamicModuleLoader } from 'shared/lib/components'
import {
    actions as profileActions,
    ProfileCard,
    reducer as profileReducer,
    selectors as profileSelectors,
} from 'entities/Profile'
import classes from './ProfilePage.module.scss'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from '../ProfilePageHeader'
import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { type ValidateProfileError } from 'entities/Profile/model/types/profile'
import { type Currency } from 'shared/const/currency'
import { type Country } from 'shared/const/country'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const { profileId } = useParams<{ profileId: string }>()
    const dispatch = useAppDispatch()
    const profileLoading = useSelector(profileSelectors.loading)
    const profileError = useSelector(profileSelectors.error)
    const profileReadonly = useSelector(profileSelectors.readOnly)
    const formProfile = useSelector(profileSelectors.form)
    const profileValidationErrors = useSelector(
        profileSelectors.getProfileValidationErrors
    )

    useEffect(() => {
        if (profileId) {
            dispatch(profileActions.fetchProfileData(profileId)).catch(
                console.log
            )
        }
    }, [dispatch, profileId])

    const validateErrorTranslates = useMemo<
        Record<ValidateProfileError, string>
    >(() => {
        return {
            SERVER_ERROR: t('Серверная ошибка при сохранении'),
            INCORRECT_AGE: t('Некорректный возраст'),
            INCORRECT_COUNTRY: t('Некорректный регион'),
            INCORRECT_USER_DATA: t('Имя и фамилия обязательны'),
            NO_DATA: t('Данные не указаны'),
        }
    }, [t])

    const handleChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value ?? '' }))
        },
        [dispatch]
    )

    const handleChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
        },
        [dispatch]
    )

    const handleChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }))
        },
        [dispatch]
    )

    const handleChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value ?? '' }))
        },
        [dispatch]
    )

    const handleChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value ?? '' }))
        },
        [dispatch]
    )

    const handleChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
        },
        [dispatch]
    )

    const handleChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }))
        },
        [dispatch]
    )

    const handleChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(profileActions.updateProfile({ country: value }))
        },
        [dispatch]
    )

    return (
        <div className={classNames(classes.profilePage, {}, [className])}>
            <ProfilePageHeader />
            {!!profileValidationErrors?.length &&
                profileValidationErrors.map((err) => {
                    return (
                        <Text
                            key={err}
                            theme="error"
                            text={validateErrorTranslates[err]}
                        />
                    )
                })}
            <ProfileCard
                profile={formProfile}
                loading={profileLoading}
                error={profileError}
                readonly={profileReadonly}
                onChangeFirstName={handleChangeFirstName}
                onChangeLastName={handleChangeLastName}
                onChangeAge={handleChangeAge}
                onChangeCity={handleChangeCity}
                onChangeUsername={handleChangeUsername}
                onChangeAvatar={handleChangeAvatar}
                onChangeCurrency={handleChangeCurrency}
                onChangeCountry={handleChangeCountry}
            />
        </div>
    )
})
ProfilePage.displayName = 'ProfilePage'

export default withDynamicModuleLoader(ProfilePage, {
    reducers: { profile: profileReducer },
    removeAfterUnmount: true,
})
