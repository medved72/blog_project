import * as api from 'shared/api/api'
import axios from 'axios'

jest.mock('shared/api/api')
const mockedApi = jest.mocked(api)

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

mockedApi.$api = mockedAxios

export { mockedAxios }
