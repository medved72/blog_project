import { type FC, memo, useCallback } from 'react'
import { Text } from '@/shared/ui/Text'
import { AddArticleCommentForm } from '@/features/AddArticleCommentForm'
import {
    ArticleCommentsList,
    fetchCommentsListByArticleId,
} from '@/features/ArticleCommentsList'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useTranslation } from 'react-i18next'

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
