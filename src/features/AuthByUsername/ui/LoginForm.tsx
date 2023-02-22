import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface LoginFormProps {
    className?: string
}
export const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(classes.loginForm, {}, [className])}>
            <Input
                className={classes.input}
                type="text"
                placeholder={t('typeLogin')!}
                autoFocus
            />
            <Input
                className={classes.input}
                type="text"
                placeholder={t('typePassword')!}
            />
            <Button className={classes.button}>{t('signIn')}</Button>
        </div>
    )
})
LoginForm.displayName = 'LoginForm'
