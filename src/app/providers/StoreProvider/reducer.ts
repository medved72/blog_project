import { combineReducers } from '@reduxjs/toolkit'

import { reducer as counter } from 'entities/Counter'

export const rootReducer = combineReducers({
    counter,
})
