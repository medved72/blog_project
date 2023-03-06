import { type FC, memo, useCallback, useEffect } from 'react'
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

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const profile = useSelector(profileSelectors.profile)
    const profileLoading = useSelector(profileSelectors.loading)
    const profileError = useSelector(profileSelectors.error)
    const profileReadonly = useSelector(profileSelectors.readOnly)

    useEffect(() => {
        dispatch(profileActions.fetchProfileData()).catch(console.log)
    }, [dispatch])

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

    return (
        <div className={classNames(classes.profilePage, {}, [className])}>
            <ProfilePageHeader />
            <ProfileCard
                profile={profile}
                loading={profileLoading}
                error={profileError}
                readonly={profileReadonly}
                onChangeFirstName={handleChangeFirstName}
                onChangeLastName={handleChangeLastName}
            />
        </div>
    )
})
ProfilePage.displayName = 'ProfilePage'

export default withDynamicModuleLoader(ProfilePage, {
    reducers: { profile: profileReducer },
    removeAfterUnmount: true,
})
