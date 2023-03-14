import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { CommentCard } from '../CommentCard'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

const emptyComments: Comment[] = [
    {
        id: '',
        text: '',
        user: { id: '', username: '' },
    },
    {
        id: '',
        text: '',
        user: { id: '', username: '' },
    },
    {
        id: '',
        text: '',
        user: { id: '', username: '' },
    },
]

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation()

    if (isLoading && !comments?.length) {
        return (
            <>
                {emptyComments.map((comment, index) => {
                    return (
                        <CommentCard
                            key={index}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    )
                })}
            </>
        )
    }

    return (
        <div className={classNames(classes.commentList, {}, [className])}>
            {!comments?.length ? (
                <Text text={t('comments.empty')} />
            ) : (
                comments.map((comment) => {
                    return (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    )
                })
            )}
        </div>
    )
})
CommentList.displayName = 'CommentList'