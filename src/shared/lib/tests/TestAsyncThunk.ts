import { type AsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk'

import axios, { type AxiosStatic } from 'axios'
import { type DeepPartial } from '@reduxjs/toolkit'
jest.mock('axios')
const mockedAxios = jest.mocked(axios)

type ActionCreator<Returned, ThunkArg, Rejected> = AsyncThunk<
    Returned,
    ThunkArg,
    GlbThunkConfig<Rejected>
>

export class TestAsyncThunk<Returned, ThunkArg, Rejected> {
    dispatch: GlbAppDispatch
    getState: jest.MockedFn<any>
    actionCreator: ActionCreator<Returned, ThunkArg, Rejected>
    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor(
        actionCreator: ActionCreator<Returned, ThunkArg, Rejected>,
        state?: DeepPartial<Required<GlbAppState>>
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state ?? {})
        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg)
        return await action(this.dispatch, this.getState, {
            api: this.api,
        })
    }
}
