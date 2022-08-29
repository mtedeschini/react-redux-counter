import { createSlice,  } from "@reduxjs/toolkit";

const initialAuthState = {isAuth : false}
export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuth = true
        },
        logout(state){
            state.isAuth = false
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
