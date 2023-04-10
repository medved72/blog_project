import { EditableProfileCard } from './EditableProfileCard'
import {
    renderWithProviders,
    mockedAxios,
} from 'shared/lib/tests/renderWithProviders'
import { type Profile } from 'entities/Profile'
import { Currency } from 'shared/const/currency'
import { Country } from 'shared/const/country'
import { editableProfileCardReducer } from '../../model/slice/editableProfileCard.slice'
import { screen, waitFor } from '@testing-library/react'
import { type User } from 'entities/User'

const user: Required<User> = {
    id: '5a9ce407-e95d-4308-b2af-1d0c9ae9b2f5',
    username: 'admin',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/136.jpg',
}

const profile: Required<Profile> = {
    id: '5a9ce407-e95d-4308-b2af-1d0c9ae9b2f5',
    first: 'Taya',
    lastname: 'Nolan',
    age: 53,
    currency: Currency.EUR,
    country: Country.Kazakhstan,
    city: 'Санкт-Петербург',
    username: 'admin',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/136.jpg',
}

describe.only('EditableProfileCard', () => {
    it('should enable edit mode', async () => {
        mockedAxios.get.mockResolvedValue(Promise.resolve({ data: profile }))

        const { userEvent } = renderWithProviders(
            <EditableProfileCard profileId="1" />,
            {
                initialState: {
                    user: { authData: user },
                },
            }
        )

        await waitFor(() => {
            expect(screen.queryByTestId('DotsSpinner')).not.toBeInTheDocument()
        })

        const [call] = mockedAxios.get.mock.calls

        expect(call).toEqual(['/profile/1'])

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.editButton')
        )

        expect(
            screen.queryByTestId('EditableProfileCardHeader.editButton')
        ).not.toBeInTheDocument()

        expect(
            screen.getByTestId('EditableProfileCardHeader.cancelButton')
        ).toBeInTheDocument()

        expect(
            screen.getByTestId('EditableProfileCardHeader.saveButton')
        ).toBeInTheDocument()
    })

    it('should not show edit buttons', async () => {
        mockedAxios.get.mockResolvedValue(Promise.resolve({ data: profile }))

        renderWithProviders(<EditableProfileCard profileId="1" />, {
            initialState: {
                user: { authData: { ...user, id: 'randomId' } },
            },
        })

        await waitFor(() => {
            expect(screen.queryByTestId('DotsSpinner')).not.toBeInTheDocument()
        })

        expect(
            screen.queryByTestId('EditableProfileCardHeader.actions')
        ).not.toBeInTheDocument()
    })

    it('should cancel edit', async () => {
        mockedAxios.get.mockResolvedValue(Promise.resolve({ data: profile }))

        const { userEvent } = renderWithProviders(
            <EditableProfileCard profileId="1" />,
            {
                initialState: {
                    user: { authData: user },
                    editableProfileCard: {
                        status: 'idle',
                        readonly: false,
                        validateError: [],
                    },
                },
                asyncReducers: {
                    editableProfileCard: editableProfileCardReducer,
                },
            }
        )

        await waitFor(() => {
            expect(screen.queryByTestId('DotsSpinner')).not.toBeInTheDocument()
        })

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.cancelButton')
        )
        expect(
            screen.queryByTestId('EditableProfileCardHeader.cancelButton')
        ).not.toBeInTheDocument()

        expect(
            screen.queryByTestId('EditableProfileCardHeader.editButton')
        ).toBeInTheDocument()
    })

    it('should restore input value when canceling', async () => {
        mockedAxios.get.mockResolvedValue(Promise.resolve({ data: profile }))

        const { userEvent } = renderWithProviders(
            <EditableProfileCard profileId="1" />,
            {
                initialState: {
                    user: { authData: user },
                },
            }
        )

        await waitFor(() => {
            expect(screen.queryByTestId('DotsSpinner')).not.toBeInTheDocument()
        })

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.editButton')
        )

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname.input'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname.input'))

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname.input'),
            'user'
        )

        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname.input'),
            'user'
        )

        expect(screen.getByTestId('ProfileCard.firstname.input')).toHaveValue(
            'user'
        )

        expect(screen.getByTestId('ProfileCard.lastname.input')).toHaveValue(
            'user'
        )

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.cancelButton')
        )

        expect(screen.getByTestId('ProfileCard.firstname.input')).toHaveValue(
            profile.first
        )

        expect(screen.getByTestId('ProfileCard.lastname.input')).toHaveValue(
            profile.lastname
        )
    })

    it('should show error', async () => {
        mockedAxios.get.mockResolvedValue(Promise.resolve({ data: profile }))

        const { userEvent } = renderWithProviders(
            <EditableProfileCard profileId="1" />,
            {
                initialState: {
                    user: { authData: user },
                },
            }
        )

        await waitFor(() => {
            expect(screen.queryByTestId('DotsSpinner')).not.toBeInTheDocument()
        })

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.editButton')
        )

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname.input'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname.input'))
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.saveButton')
        )

        expect(
            screen.getByTestId('EditableProfileCard.error.text')
        ).toHaveTextContent('Имя и фамилия обязательны')
    })

    it.only('should send put request', async () => {
        mockedAxios.get.mockResolvedValue(Promise.resolve({ data: profile }))
        mockedAxios.put.mockResolvedValue(Promise.resolve({ data: profile }))

        const { userEvent } = renderWithProviders(
            <EditableProfileCard profileId="1" />,
            {
                initialState: {
                    user: { authData: user },
                },
            }
        )

        await waitFor(() => {
            expect(screen.queryByTestId('DotsSpinner')).not.toBeInTheDocument()
        })

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.editButton')
        )

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname.input'))

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname.input'),
            'Имя'
        )

        await userEvent.clear(screen.getByTestId('ProfileCard.lastname.input'))

        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname.input'),
            'Фамилия'
        )

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.saveButton')
        )

        const [call] = mockedAxios.put.mock.calls
        expect(call).toEqual([
            `/profile/${profile.id}`,
            { ...profile, first: 'Имя', lastname: 'Фамилия' },
        ])

        expect(
            screen.queryByTestId('EditableProfileCardHeader.saveButton')
        ).not.toBeInTheDocument()

        expect(
            screen.getByTestId('EditableProfileCardHeader.editButton')
        ).toBeInTheDocument()
    })
})
