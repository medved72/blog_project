export const getPassword = (state: GlbAppState) =>
    state.loginForm?.password ?? ''
