import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/Text'
import { VStack } from '@/shared/ui/Stack'
import { classNames } from '@/shared/lib/classNames'

import { CommentCard } from '../CommentCard'
import { type CommentDto } from '../../model/types/comment'

interface CommentListProps {
    className?: string
    comments?: CommentDto[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation()

    if (isLoading && !comments?.length) {
        return (
            <VStack
                className={classNames('', {}, [className])}
                gap="16"
                fullWidth
            >
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        )
    }

    return (
        <VStack className={classNames('', {}, [className])} gap="16" fullWidth>
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
        </VStack>
    )
})
CommentList.displayName = 'CommentList'
