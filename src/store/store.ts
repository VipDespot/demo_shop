import {configureStore, Reducer} from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import { productsApi } from '../services/getApi'

export const store = configureStore({
    reducer: {
            [productsApi.reducerPath]: productsApi.reducer} ,
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch