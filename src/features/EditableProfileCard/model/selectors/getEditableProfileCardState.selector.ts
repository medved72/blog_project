import { getEditableProfileCardInitialState } from '../slice/getEditableProfileCardInitialState'
// import { type EditableProfileCardState } from '../types/EditableProfileCardState'

export const getEditableProfileCardState = (state: GlbAppState) =>
    state.editableProfileCard ?? getEditableProfileCardInitialState()
