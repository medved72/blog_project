import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage'
import { type UserDto } from '../../../src/shared/api/types'

Cypress.Commands.add(
    'login',
    (username, password): Cypress.Chainable<UserDto> => {
        return cy
            .request<UserDto>({
                method: 'POST',
                url: 'http://localhost:8000/login',
                body: {
                    username,
                    password,
                },
            })
            .then(({ body }) => {
                window.localStorage.setItem(
                    USER_LOCALSTORAGE_KEY,
                    JSON.stringify(body)
                )
                return body
            })
    }
)
