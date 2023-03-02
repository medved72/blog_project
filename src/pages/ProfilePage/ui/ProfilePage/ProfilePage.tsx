import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { withDynamicModuleLoader } from 'shared/lib/components'
import {
    actions as profileActions,
    ProfileCard,
    reducer as profile,
} from 'entities/Profile'
import classes from './ProfilePage.module.scss'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
    const { className } = props
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(profileActions.fetchProfileData()).catch(console.log)
    }, [dispatch])

    return (
        <div className={classNames(classes.profilePage, {}, [className])}>
            <ProfileCard />
        </div>
    )
})
ProfilePage.displayName = 'ProfilePage'

export default withDynamicModuleLoader(ProfilePage, {
    reducers: { profile },
    removeAfterUnmount: true,
})
