import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Skeleton } from 'shared/ui/Skeleton'

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <div className={classNames(classes.commentCard, {}, [className])}>
                <div className={classes.header}>
                    <Skeleton width={30} height={30} borderRadius={'50%'} />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        )
    }

    return (
        <div className={classNames(classes.commentCard, {}, [className])}>
            <div className={classes.header}>
                {comment.user.avatar && (
                    <Avatar size={30} src={comment.user.avatar} />
                )}
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    )
})
CommentCard.displayName = 'CommentCard'
