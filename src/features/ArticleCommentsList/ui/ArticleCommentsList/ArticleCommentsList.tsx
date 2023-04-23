import { type FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CommentList } from '@/entities/Comment'
import { withDynamicModuleLoader } from '@/shared/lib/components'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import {
    articleCommentsListReducer,
    getArticleCommentsListAdapterSelectors,
} from '../../model/slices/articleCommentsList.slice'
import { getArticleCommentListLoading } from '../../model/selectors'
import { fetchCommentsListByArticleId } from '../../model/services/fetchCommentsListByArticleId'

interface ArticleCommentsListProps {
    className?: string
    articleId: string
}

const ArticleCommentsListPlain: FC<ArticleCommentsListProps> = memo((props) => {
    const { className, articleId } = props
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCommentsListByArticleId(articleId)).catch(console.error)
    }, [articleId, dispatch])

    const comments = useSelector(
        getArticleCommentsListAdapterSelectors.selectAll
    )
    const loading = useSelector(getArticleCommentListLoading)

    return (
        <CommentList
            className={className}
            isLoading={loading}
            comments={comments}
        />
    )
})
ArticleCommentsListPlain.displayName = 'ArticleCommentsList'

export const ArticleCommentsList = withDynamicModuleLoader(
    ArticleCommentsListPlain,
    {
        removeAfterUnmount: true,
        reducers: {
            articleCommentList: articleCommentsListReducer,
        },
    }
)
