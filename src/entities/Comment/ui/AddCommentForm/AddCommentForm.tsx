import { type FC, type FormEvent, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Input } from 'shared/ui/Input'
import classes from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

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
        <form
            className={classNames(classes.addCommentForm, {}, [className])}
            onSubmit={handleSendComment}
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
        </form>
    )
})
AddCommentForm.displayName = 'AddCommentForm'
