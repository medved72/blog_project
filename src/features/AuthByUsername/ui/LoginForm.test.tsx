import { screen } from '@testing-library/react'

import {
    renderWithProviders,
    mockedAxios,
} from '@/shared/lib/tests/renderWithProviders'

import LoginForm from './LoginForm'
import { reducer } from '../model'

describe('LoginForm', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )
        expect(baseElement).toBeTruthy()
    })

    it('should render with correct ru translations', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />)

        expect(screen.getByTestId('loginForm.title.title')).toHaveTextContent(
            'Авторизация'
        )

        expect(
            screen.getByTestId('loginForm.username.placeholder')
        ).toHaveTextContent('Введите логин >')

        expect(
            screen.getByTestId('loginForm.password.placeholder')
        ).toHaveTextContent('Введите пароль >')

        expect(screen.getByTestId('loginForm.submit')).toHaveTextContent(
            'Войти'
        )
    })

    it('should render with correct en translations', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />, {
            language: 'en',
        })

        expect(screen.getByTestId('loginForm.title.title')).toHaveTextContent(
            'Login'
        )

        expect(
            screen.getByTestId('loginForm.username.placeholder')
        ).toHaveTextContent('Enter login >')

        expect(
            screen.getByTestId('loginForm.password.placeholder')
        ).toHaveTextContent('Enter password >')

        expect(screen.getByTestId('loginForm.submit')).toHaveTextContent(
            'Sign In'
        )
    })

    it('should change username value', async () => {
        const { userEvent } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )

        await userEvent.type(getUsernameInput(), 'username')

        expect(getUsernameInput()).toHaveValue('username')
    })

    it('should change password value', async () => {
        const { userEvent } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )

        await userEvent.type(getPasswordInput(), 'password')

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
        const { userEvent } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )

        await userEvent.type(getUsernameInput(), 'username')
        await userEvent.type(getPasswordInput(), 'password')
        await userEvent.click(getSubmit())
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
        const { userEvent } = renderWithProviders(
            <LoginForm onLoginSuccess={successSubmitMock} />
        )

        await userEvent.type(getUsernameInput(), 'username_success')
        await userEvent.type(getPasswordInput(), 'password_success')
        await userEvent.click(getSubmit())

        const [call] = mockedAxios.post.mock.calls
        expect(call).toEqual([
            '/login',
            { username: 'username_success', password: 'password_success' },
        ])
        expect(successSubmitMock).toHaveBeenCalled()
    })

    it('should get profile if empty backend data', async () => {
        mockedAxios.post.mockResolvedValue({})
        const { userEvent } = renderWithProviders(
            <LoginForm onLoginSuccess={jest.fn} />
        )

        await userEvent.type(getUsernameInput(), 'username')
        await userEvent.type(getPasswordInput(), 'password')
        await userEvent.click(getSubmit())
        const [call] = mockedAxios.post.mock.calls
        expect(call).toEqual([
            '/login',
            { username: 'username', password: 'password' },
        ])
        expect(getError()).toHaveTextContent('Произошла неизвестная ошибка')
    })
})

function getError() {
    return screen.getByTestId('loginForm.profile.text')
}

function getSubmit() {
    return screen.getByTestId('loginForm.submit')
}

function getUsernameInput() {
    return screen.getByTestId('loginForm.username.input')
}

function getPasswordInput() {
    return screen.getByTestId('loginForm.password.input')
}
