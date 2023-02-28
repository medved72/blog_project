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
        <div className={classNames(classes.profilePage, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>ProfilePage</p>
        </div>
    )
})
ProfilePage.displayName = 'ProfilePage'

export default withDynamicModuleLoader(ProfilePage, {
    reducers: { profile },
    removeAfterUnmount: true,
})
