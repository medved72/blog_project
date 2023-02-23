import { type FC, type FormEventHandler, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import classes from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { actions } from '../model'
import { getLoginState } from '../model/selectors'
import { loginByUsername } from '../model/services/loginByUsername'
import { Text } from 'shared/ui/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

interface LoginFormProps {
    className?: string
    onLoginSuccess: () => void
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className, onLoginSuccess } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const handleChangeUsername = useCallback(
        (username: string): void => {
            dispatch(actions.setUsername(username))
        },
        [dispatch]
    )

    const handleChangePassword = useCallback(
        (password: string): void => {
            dispatch(actions.setPassword(password))
        },
        [dispatch]
    )

    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
        async (event) => {
            event.preventDefault()
            event.stopPropagation()
            const result = await dispatch(
                loginByUsername({ username, password })
            )
            if (result.meta.requestStatus === 'fulfilled') {
                onLoginSuccess()
            }
        },
        [dispatch, onLoginSuccess, password, username]
    )

    return (
        <form
            data-testid="loginForm"
            onSubmit={handleSubmit}
            className={classNames(classes.loginForm, {}, [className])}
        >
            <Text data-testid="loginForm.title" title={t('authForm')!} />
            {error && (
                <Text
                    data-testid="loginForm.error"
                    text={t(error)!}
                    theme="error"
                />
            )}
            <Input
                data-testid="loginForm.username"
                className={classes.input}
                type="text"
                placeholder={t('typeLogin')!}
                onChange={handleChangeUsername}
                value={username}
                autoFocus
            />
            <Input
                data-testid="loginForm.password"
                className={classes.input}
                type="text"
                placeholder={t('typePassword')!}
                onChange={handleChangePassword}
                value={password}
            />
            <Button
                data-testid="loginForm.submit"
                theme="outline"
                className={classes.button}
                disabled={isLoading}
                type="submit"
            >
                {t('signIn')}
            </Button>
        </form>
    )
})
LoginForm.displayName = 'LoginForm'
