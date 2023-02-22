declare type RootState = ReturnType<
    typeof import('../providers/StoreProvider/reducer').rootReducer
>

declare type AppDispatch = ReturnType<
    typeof import('../providers/StoreProvider/store').setupStore
>['dispatch']
