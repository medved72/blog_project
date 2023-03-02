import axios from 'axios'
import * as api from 'shared/api/api'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

jest.mock('shared/api/api', () => {
    return {
        __esModule: true,
        $api: mockedAxios,
    }
})
const mockedApi = jest.mocked(api)

mockedApi.$api = mockedAxios

export { mockedAxios }
