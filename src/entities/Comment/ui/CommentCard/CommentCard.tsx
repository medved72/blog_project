import { type FC, memo } from 'react'

import { AppLink } from '@/shared/ui/Link'
import { Avatar } from '@/shared/ui/Avatar'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames'
import { getProfileRoute } from '@/shared/config/routes'

import { type CommentDto } from '../../model/types/comment'

import classes from './CommentCard.module.scss'

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
                to={getProfileRoute(comment.user.id)}
            >
                <HStack gap="8">
                    {comment.user.avatar && (
                        <Avatar
                            size={30}
                            src={comment.user.avatar}
                            firstName={comment.user.username}
                        />
                    )}
                    <Text title={comment.user.username} />
                </HStack>
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    )
})
CommentCard.displayName = 'CommentCard'
