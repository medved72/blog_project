import { type FC, memo, useCallback } from 'react'
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

    const handleLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onLoginSuccess()
        }
    }, [dispatch, onLoginSuccess, password, username])

    return (
        <div className={classNames(classes.loginForm, {}, [className])}>
            <Text title={t('authForm')!} />
            {error && <Text text={t(error)!} theme="error" />}
            <Input
                className={classes.input}
                type="text"
                placeholder={t('typeLogin')!}
                onChange={handleChangeUsername}
                value={username}
                autoFocus
            />
            <Input
                className={classes.input}
                type="text"
                placeholder={t('typePassword')!}
                onChange={handleChangePassword}
                value={password}
            />
            <Button
                theme="outline"
                className={classes.button}
                onClick={handleLoginClick}
                disabled={isLoading}
            >
                {t('signIn')}
            </Button>
        </div>
    )
})
LoginForm.displayName = 'LoginForm'
