import { type FC, type FormEvent, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { classNames } from '@/shared/lib/classNames'

import { HStack } from '../../../../shared/ui/Stack'

import classes from './AddCommentForm.module.scss'

interface AddCommentFormProps {
    className?: string
    onCommentTextChange: (value: string) => void
    onSendClick: (text: string) => void
    value: string
    sending?: boolean
}

export const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
    const { className, onCommentTextChange, onSendClick, value, sending } =
        props
    const { t } = useTranslation()

    const handleCommentTextChange = useCallback(
        (newValue: string) => {
            onCommentTextChange(newValue)
        },
        [onCommentTextChange]
    )

    const handleSendComment = useCallback(
        (event: FormEvent) => {
            event.preventDefault()
            onSendClick(value)
        },
        [onSendClick, value]
    )

    return (
        <HStack
            className={classNames(classes.addCommentForm, {}, [className])}
            onSubmit={handleSendComment}
            as="form"
            fullWidth
        >
            <Input
                className={classes.input}
                placeholder={t('input.placeholder.addNewComment') + '>'}
                value={value}
                onChange={handleCommentTextChange}
                disabled={sending}
            />
            <Button theme="outline" type="submit" disabled={sending}>
                {t('button.text.send')}
            </Button>
        </HStack>
    )
})
AddCommentForm.displayName = 'AddCommentForm'
