import { useMemo } from 'react'

import {
    type CreateSliceOptions,
    type SliceCaseReducers,
} from '@reduxjs/toolkit/dist'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options)

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch()

        // @ts-expect-error TODO
        return useMemo(
            // @ts-expect-error TODO
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch]
        )
    }

    return {
        ...slice,
        useActions,
    }
}
