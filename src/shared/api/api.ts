import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const $api = axios.create({
    baseURL: _API_,
})

$api.interceptors.request.use(
    (request) => {
        request.headers.set(
            'authorization',
            localStorage.getItem(USER_LOCALSTORAGE_KEY)
        )
        return request
    },
    () => {}
)
