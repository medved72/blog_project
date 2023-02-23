import { screen, within } from '@testing-library/react'
import { renderWithProviders } from 'shared/lib/tests'
import { LoginForm } from './LoginForm'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('LoginForm', () => {
    let mock: MockAdapter

    beforeAll(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.reset()
    })

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
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />)

        await userEvent.type(getUsernameInput(), 'username')

        expect(getUsernameInput()).toHaveValue('username')
    })

    it('should change password value', async () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />)

        await userEvent.type(getPasswordInput(), 'password')

        expect(getPasswordInput()).toHaveValue('password')
    })

    it('should render with predefined values', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />, {
            initialState: {
                loginForm: {
                    username: 'usernameFromRedux',
                    password: 'passwordFromRedux',
                },
            },
        })

        expect(getUsernameInput()).toHaveValue('usernameFromRedux')
        expect(getPasswordInput()).toHaveValue('passwordFromRedux')
    })

    it('should render with predefined ru error', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />, {
            initialState: {
                loginForm: {
                    username: '',
                    password: '',
                    error: 'ERROR_INCORRECT_USERNAME_OR_PASSWORD',
                },
            },
        })

        expect(getError()).toHaveTextContent('Неправильный логин или пароль')
    })

    it('should render with predefined en error', () => {
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />, {
            language: 'en',
            initialState: {
                loginForm: {
                    username: '',
                    password: '',
                    error: 'ERROR_INCORRECT_USERNAME_OR_PASSWORD',
                },
            },
        })

        expect(getError()).toHaveTextContent('Incorrect username or password')
    })

    it('should get error while submit', async () => {
        mock.onPost('http://localhost:8000/login').reply(403, 'Auth error')
        renderWithProviders(<LoginForm onLoginSuccess={jest.fn} />)

        await userEvent.type(getUsernameInput(), 'username')
        await userEvent.type(getPasswordInput(), 'password')
        await userEvent.click(getSubmit())

        expect(mock.history.post[0].url).toEqual('http://localhost:8000/login')
        expect(JSON.parse(mock.history.post[0].data)).toEqual({
            username: 'username',
            password: 'password',
        })
        expect(getError()).toHaveTextContent('Неправильный логин или пароль')
    })

    it('should success submit', async () => {
        mock.onPost('http://localhost:8000/login').reply(200, {
            id: '1',
            username: 'username',
        })
        const successSubmitMock = jest.fn()
        renderWithProviders(<LoginForm onLoginSuccess={successSubmitMock} />)

        await userEvent.type(getUsernameInput(), 'username')
        await userEvent.type(getPasswordInput(), 'password')
        await userEvent.click(getSubmit())

        expect(mock.history.post[0].url).toEqual('http://localhost:8000/login')
        expect(JSON.parse(mock.history.post[0].data)).toEqual({
            username: 'username',
            password: 'password',
        })
        expect(successSubmitMock).toHaveBeenCalled()
    })
})

function getError() {
    return screen.getByTestId('loginForm.error')
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
