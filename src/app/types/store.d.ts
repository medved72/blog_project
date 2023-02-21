declare type RootState = ReturnType<
    typeof import('../providers/StoreProvider/reducer').rootReducer
>
