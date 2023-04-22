import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import classes from './CommentCard.module.scss'
import { type CommentDto } from '../../model/types/comment'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { AppLink } from '../../../../shared/ui/Link'
import { generatePath } from 'react-router-dom'
import { ROUTES } from '../../../../shared/config/routes'
import { HStack, VStack } from '../../../../shared/ui/Stack'

interface CommentCardProps {
    className?: string
    comment?: CommentDto
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <VStack
                className={classNames(classes.commentCard, {}, [className])}
                gap="8"
                fullWidth
            >
                <HStack className={classes.header} gap="8">
                    <Skeleton width={30} height={30} borderRadius={'50%'} />
                    <Skeleton height={16} width={100} />
                </HStack>
                <Skeleton width="100%" height={50} />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack
            className={classNames(classes.commentCard, {}, [className])}
            gap="8"
            fullWidth
        >
            <AppLink
                className={classes.header}
                to={generatePath(ROUTES.PROFILE, {
                    profileId: comment.user.id,
                })}
            >
                <HStack gap="8">
                    {comment.user.avatar && (
                        <Avatar size={30} src={comment.user.avatar} />
                    )}
                    <Text title={comment.user.username} />
                </HStack>
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    )
})
CommentCard.displayName = 'CommentCard'
