import { screen, within } from '@testing-library/react'
import {
    renderWithProviders,
    mockedAxios,
} from 'shared/lib/tests/renderWithProviders'
import { reducer } from '../model'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )
        expect(baseElement).toBeTruthy()
    })

    it('should render with correct ru translations', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />)

        expect(screen.getByTestId('loginForm.title')).toHaveTextContent(
            'Авторизация'
        )

        expect(
            within(screen.getByTestId('loginForm.username')).getByTestId(
                'placeholder'
            )
        ).toHaveTextContent('Введите логин >')

        expect(
            within(screen.getByTestId('loginForm.password')).getByTestId(
                'placeholder'
            )
        ).toHaveTextContent('Введите пароль >')

        expect(screen.getByTestId('loginForm.submit')).toHaveTextContent(
            'Войти'
        )
    })

    it('should render with correct en translations', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />, {
            language: 'en',
        })

        expect(screen.getByTestId('loginForm.title')).toHaveTextContent('Login')

        expect(
            within(screen.getByTestId('loginForm.username')).getByTestId(
                'placeholder'
            )
        ).toHaveTextContent('Enter login >')

        expect(
            within(screen.getByTestId('loginForm.password')).getByTestId(
                'placeholder'
            )
        ).toHaveTextContent('Enter password >')

        expect(screen.getByTestId('loginForm.submit')).toHaveTextContent(
            'Sign In'
        )
    })

    it('should change username value', async () => {
        const { user } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )

        await user.type(getUsernameInput(), 'username')

        expect(getUsernameInput()).toHaveValue('username')
    })

    it('should change password value', async () => {
        const { user } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )

        await user.type(getPasswordInput(), 'password')

        expect(getPasswordInput()).toHaveValue('password')
    })

    it('should render with predefined values', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />, {
            initialState: {
                loginForm: {
                    username: 'usernameFromRedux',
                    password: 'passwordFromRedux',
                    isLoading: false,
                },
            },
            asyncReducers: { loginForm: reducer },
        })

        expect(getUsernameInput()).toHaveValue('usernameFromRedux')
        expect(getPasswordInput()).toHaveValue('passwordFromRedux')
    })

    it('should render with predefined ru profile', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />, {
            initialState: {
                loginForm: {
                    username: '',
                    password: '',
                    error: 'ERROR_INCORRECT_USERNAME_OR_PASSWORD',
                    isLoading: false,
                },
            },
            asyncReducers: { loginForm: reducer },
        })

        expect(getError()).toHaveTextContent('Неправильный логин или пароль')
    })

    it('should render with predefined en profile', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />, {
            language: 'en',
            initialState: {
                loginForm: {
                    username: '',
                    password: '',
                    error: 'ERROR_INCORRECT_USERNAME_OR_PASSWORD',
                    isLoading: false,
                },
            },
            asyncReducers: { loginForm: reducer },
        })

        expect(getError()).toHaveTextContent('Incorrect username or password')
    })

    it('should get profile while submit', async () => {
        mockedAxios.post.mockRejectedValue({})
        const { user } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )

        await user.type(getUsernameInput(), 'username')
        await user.type(getPasswordInput(), 'password')
        await user.click(getSubmit())
        const [call] = mockedAxios.post.mock.calls
        expect(call).toEqual([
            '/login',
            { username: 'username', password: 'password' },
        ])
        expect(getError()).toHaveTextContent('Неправильный логин или пароль')
    })

    it('should success submit', async () => {
        mockedAxios.post.mockResolvedValue({
            data: { id: '1', username: 'username' },
        })

        const successSubmitMock = jest.fn()
        const { user } = renderWithProviders(
            <LoginForm onLoginSuccess={successSubmitMock} />
        )

        await user.type(getUsernameInput(), 'username_success')
        await user.type(getPasswordInput(), 'password_success')
        await user.click(getSubmit())

        const [call] = mockedAxios.post.mock.calls
        expect(call).toEqual([
            '/login',
            { username: 'username_success', password: 'password_success' },
        ])
        expect(successSubmitMock).toHaveBeenCalled()
    })

    it('should get profile if empty backend data', async () => {
        mockedAxios.post.mockResolvedValue({})
        const { user } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )

        await user.type(getUsernameInput(), 'username')
        await user.type(getPasswordInput(), 'password')
        await user.click(getSubmit())
        const [call] = mockedAxios.post.mock.calls
        expect(call).toEqual([
            '/login',
            { username: 'username', password: 'password' },
        ])
        expect(getError()).toHaveTextContent('Произошла неизвестная ошибка')
    })
})

function getError() {
    return screen.getByTestId('loginForm.profile')
}

function getSubmit() {
    return screen.getByTestId('loginForm.submit')
}

function getUsernameInput() {
    return within(screen.getByTestId('loginForm.username')).getByTestId('input')
}

function getPasswordInput() {
    return within(screen.getByTestId('loginForm.password')).getByTestId('input')
}
