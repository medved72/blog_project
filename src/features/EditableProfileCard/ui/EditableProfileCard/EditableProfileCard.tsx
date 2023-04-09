import { type FC, memo, useCallback, useEffect, useMemo } from 'react'
import { Text } from 'shared/ui/Text'
import { type Currency } from 'shared/const/currency'
import { type Country } from 'shared/const/country'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { withDynamicModuleLoader } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'
import { VStack } from 'shared/ui/Stack'
import { ProfileCard } from 'entities/Profile'
import {
    getEditableProfileCardError,
    getEditableProfileCardForm,
    getEditableProfileCardLoading,
    getEditableProfileCardReadOnly,
    getProfileValidationErrors,
} from '../../model/selectors'
import { type ValidateProfileError } from '../../model/types/EditableProfileCardState'
import {
    editableProfileCardActions,
    editableProfileCardReducer,
} from '../../model/slice/editableProfileCard.slice'
import { fetchProfileData } from '../../model/services/fetchProfileData'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader'

interface EditableProfileCardProps {
    className?: string
    profileId: string
}

const EditableProfileCardPlain: FC<EditableProfileCardProps> = memo((props) => {
    const { className, profileId } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const profileLoading = useSelector(getEditableProfileCardLoading)
    const profileError = useSelector(getEditableProfileCardError)
    const profileReadonly = useSelector(getEditableProfileCardReadOnly)
    const formProfile = useSelector(getEditableProfileCardForm)
    const profileValidationErrors = useSelector(getProfileValidationErrors)

    useEffect(() => {
        if (profileId) {
            dispatch(fetchProfileData(profileId)).catch(console.log)
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
            dispatch(
                editableProfileCardActions.updateProfile({ first: value ?? '' })
            )
        },
        [dispatch]
    )

    const handleChangeLastName = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    lastname: value ?? '',
                })
            )
        },
        [dispatch]
    )

    const handleChangeAge = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    age: Number(value ?? 0),
                })
            )
        },
        [dispatch]
    )

    const handleChangeCity = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({ city: value ?? '' })
            )
        },
        [dispatch]
    )

    const handleChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    username: value ?? '',
                })
            )
        },
        [dispatch]
    )

    const handleChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    avatar: value ?? '',
                })
            )
        },
        [dispatch]
    )

    const handleChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(
                editableProfileCardActions.updateProfile({ currency: value })
            )
        },
        [dispatch]
    )

    const handleChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(
                editableProfileCardActions.updateProfile({ country: value })
            )
        },
        [dispatch]
    )

    return (
        <VStack className={className} gap="16" fullWidth>
            <EditableProfileCardHeader />
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
        </VStack>
    )
})
EditableProfileCardPlain.displayName = 'EditableProfileCard'

export const EditableProfileCard = withDynamicModuleLoader(
    EditableProfileCardPlain,
    {
        reducers: { editableProfileCard: editableProfileCardReducer },
        removeAfterUnmount: true,
    }
)
