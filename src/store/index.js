import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/auth'
import { counterReducer } from '../reducers/counter'

export const store = configureStore({
    reducer: {
        counter: counterReducer, 
        auth: authReducer
    }
})