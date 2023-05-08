import { rtkApi } from '@/shared/api/rtkApi'
import { type UserDto, type UserJsonSettingsDto } from '@/shared/api/types'

interface SetJsonSettingsArg {
    userId: string
    jsonSettings: UserJsonSettingsDto
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<UserDto, SetJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: { jsonSettings },
            }),
        }),
        getUserDataById: build.query<UserDto, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),
    }),
})

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate
