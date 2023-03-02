import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text'
import * as selectors from '../../model/selectors'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation(['translation', 'profile'])

    const profileData = useSelector(selectors.profile)

    console.log({ profileData })

    return (
        <div className={classNames(classes.profileCard, {}, [className])}>
            <div className={classes.header}>
                <Text className={classes.text} title={t('profile:title')!} />
                <Button theme="outline">{t('edit')}</Button>
            </div>

            <div className={classes.data}>
                <Input
                    value={profileData?.first ?? ''}
                    placeholder={t('profile:yourName')!}
                />

                <Input
                    value={profileData?.lastname ?? ''}
                    placeholder={t('profile:yourFamily')!}
                />
            </div>
        </div>
    )
})
ProfileCard.displayName = 'ProfileCard'
