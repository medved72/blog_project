import { type AsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk'

import axios, { type AxiosStatic } from 'axios'
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

    constructor(actionCreator: ActionCreator<Returned, ThunkArg, Rejected>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg)
        return await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        })
    }
}
