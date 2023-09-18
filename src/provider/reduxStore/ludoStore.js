import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { LudoAction } from '../Slices/LudoAction'
import { ludoQuery } from '../query/ludoQuery'

export const ludoStore = configureStore({
    reducer: {
        [LudoAction.name]: LudoAction.reducer,
        [ludoQuery.reducerPath]: ludoQuery.reducer
        },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ludoQuery.middleware),
    
})
setupListeners(ludoStore.dispatch)