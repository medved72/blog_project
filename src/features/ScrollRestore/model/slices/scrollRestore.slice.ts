import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ScrollRestoreState } from '../types/ScrollRestoreState'

const initialState: ScrollRestoreState = { scroll: {} }

const scrollRestoreSlice = createSlice({
    name: 'scrollRestore',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string; position: number }>
        ) => {
            const {
                payload: { path, position },
            } = action
            state.scroll[path] = position
        },
    },
})

export const {
    reducer: scrollRestoreReducer,
    actions: { setScrollPosition: setScrollRestorePosition },
    getInitialState: getScrollRestoreInitialState,
} = scrollRestoreSlice
