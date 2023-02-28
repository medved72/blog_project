import { type AsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk'

type ActionCreator<Returned, ThunkArg, Rejected> = AsyncThunk<
    Returned,
    ThunkArg,
    { rejectValue: Rejected }
>

export class TestAsyncThunk<Returned, ThunkArg, Rejected> {
    dispatch: AppDispatch
    getState: () => AppState

    actionCreator: ActionCreator<Returned, ThunkArg, Rejected>

    constructor(actionCreator: ActionCreator<Returned, ThunkArg, Rejected>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg)
        return await action(this.dispatch, this.getState, undefined)
    }
}
