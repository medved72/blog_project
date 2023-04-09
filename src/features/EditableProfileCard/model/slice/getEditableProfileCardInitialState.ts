import { type EditableProfileCardState } from '../types/EditableProfileCardState'

export const getEditableProfileCardInitialState =
    (): EditableProfileCardState => ({
        status: 'idle',
        readonly: true,
        validateError: [],
    })
