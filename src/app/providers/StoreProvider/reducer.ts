import { combineReducers } from '@reduxjs/toolkit'

import { reducer as counter } from 'entities/Counter'
import { reducer as user } from 'entities/User'

export const rootReducer = combineReducers({
    user,
    counter,
})
