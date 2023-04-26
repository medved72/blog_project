import { type FC, memo, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { CommentList } from '@/entities/Comment'

import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { withDynamicModuleLoader } from '@/shared/lib/components'

import {
    articleCommentsListReducer,
    getArticleCommentsListAdapterSelectors,
} from '../../model/slices/articleCommentsList.slice'
import { fetchCommentsListByArticleId } from '../../model/services/fetchCommentsListByArticleId'
import { getArticleCommentListLoading } from '../../model/selectors'

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
