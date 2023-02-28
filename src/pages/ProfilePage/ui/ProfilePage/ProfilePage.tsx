import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import { withDynamicModuleLoader } from 'shared/lib/components'
import { reducer as profile } from 'entities/Profile'
import classes from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
    const { className } = props
    return (
        <div className={classNames(classes.profilePage, {}, [className])}></div>
    )
})
ProfilePage.displayName = 'ProfilePage'

export default withDynamicModuleLoader(ProfilePage, {
    reducers: {
        profile,
    },
    removeAfterUnmount: true,
})
