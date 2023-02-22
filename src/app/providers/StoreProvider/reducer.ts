import { combineReducers } from '@reduxjs/toolkit'

import { reducer as counter } from 'entities/Counter'
import { reducer as user } from 'entities/User'
import { reducer as loginForm } from 'features/AuthByUsername'

export const rootReducer = combineReducers({
    user,
    counter,
    loginForm,
})
