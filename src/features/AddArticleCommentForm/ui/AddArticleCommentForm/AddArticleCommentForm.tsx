import { type FC, memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import { AddCommentForm } from '@/entities/Comment'

import { classNames } from '@/shared/lib/classNames'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { withDynamicModuleLoader } from '@/shared/lib/components'

import {
    addArticleCommentFormReducer,
    setAddArticleCommentFormText,
} from '../../model/slices/addCommentForm.slice'
import { getAddArticleCommentFormLoading } from '../../model/selectors/getAddArticleCommentFormLoading'
import { getAddArticleCommentFormText } from '../../model/selectors'
import { sendArticleComment } from '../../model/services/sendArticleComment'

import classes from './AddArticleCommentForm.module.scss'

interface AddCommentFormProps {
    className?: string
    onCommentAdded?: () => void
}

const AddArticleCommentFormPlain: FC<AddCommentFormProps> = memo((props) => {
    const { className, onCommentAdded } = props

    const dispatch = useAppDispatch()

    const text = useSelector(getAddArticleCommentFormText)

    const sending = useSelector(getAddArticleCommentFormLoading)

    const handleCommentTextChange = useCallback(
        (text: string) => {
            dispatch(setAddArticleCommentFormText(text))
        },
        [dispatch]
    )

    const handleSendClick = useCallback(
        async (value: string) => {
            const result = await dispatch(sendArticleComment(value))
            if (result.meta.requestStatus === 'fulfilled') {
                onCommentAdded?.()
            }
        },
        [dispatch, onCommentAdded]
    )

    return (
        <AddCommentForm
            className={classNames(classes.addArticleCommentForm, {}, [
                className,
            ])}
            onCommentTextChange={handleCommentTextChange}
            onSendClick={handleSendClick}
            value={text}
            sending={sending}
        />
    )
})
AddArticleCommentFormPlain.displayName = 'AddArticleCommentFormPlain'

export const AddArticleCommentForm = withDynamicModuleLoader(
    AddArticleCommentFormPlain,
    {
        reducers: { addArticleCommentForm: addArticleCommentFormReducer },
    }
)
