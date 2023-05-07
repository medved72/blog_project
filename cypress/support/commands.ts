import './customCommands'
import { type UserDto } from '../../src/shared/api/types'

export {}

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<UserDto>
        }
    }
}
