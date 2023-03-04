import { mockedAxios } from './mockAxios'
import { type ReactElement } from 'react'
import { render } from '@testing-library/react'
import {
    TestsProvidersWrapperFactory,
    type TestsProvidersWrapperFactoryProps,
} from './TestsProvidersWrapper'
import userEvent from '@testing-library/user-event'
import { type UserEvent } from '@testing-library/user-event/setup/setup'

export { mockedAxios }

export const renderWithProviders = (
    component: ReactElement,
    options?: TestsProvidersWrapperFactoryProps
) => {
    const user = userEvent.setup()

    const redefinedUserMethods: Partial<UserEvent> = {
        // click: async (...args): Promise<void> => {
        //     await act(async () => {
        //         await user.click(...args)
        //     })
        // },
        // type: async (...args): Promise<void> => {
        //     await act(async () => {
        //         await user.type(...args)
        //     })
        // },
    }

    return {
        user: { ...user, ...redefinedUserMethods },
        ...render(component, {
            wrapper: TestsProvidersWrapperFactory(options),
        }),
    }
}
