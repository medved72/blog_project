declare type GlbAppState = import('../providers/StoreProvider/types').AppState

declare type GlbAppDispatch =
    import('../providers/StoreProvider/types').AppDispatch

declare type GlbAppStore =
    import('../providers/StoreProvider/types').StoreWithReducerManager

declare type GlbThunkConfig<T> =
    import('../providers/StoreProvider/types').ThunkConfig<T>
