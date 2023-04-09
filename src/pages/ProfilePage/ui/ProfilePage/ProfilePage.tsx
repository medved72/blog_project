import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'
import { EditableProfileCard } from 'features/EditableProfileCard'

const ProfilePage: FC = memo(() => {
    const { profileId } = useParams<{ profileId: string }>()

    if (!profileId) {
        return null
    }

    return <EditableProfileCard profileId={profileId} />
})
ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
