import { type FC, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import {
    ArticleCommentsList,
    fetchCommentsListByArticleId,
} from '@/features/ArticleCommentsList'
import { AddArticleCommentForm } from '@/features/AddArticleCommentForm'

import { Text } from '@/shared/ui/Text'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

interface ArticleDetailsCommentsProps {
    articleId: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
    (props) => {
        const { articleId } = props
        const { t } = useTranslation('articleDetails')

        const dispatch = useAppDispatch()

        const handleCommentAdded = useCallback(async () => {
            if (!articleId) return
            await dispatch(fetchCommentsListByArticleId(articleId))
        }, [articleId, dispatch])

        return (
            <>
                <Text size="L" className={''} title={t('comments.title')} />
                <AddArticleCommentForm onCommentAdded={handleCommentAdded} />
                <ArticleCommentsList articleId={articleId} />
            </>
        )
    }
)
ArticleDetailsComments.displayName = 'ArticleDetailsComments'
