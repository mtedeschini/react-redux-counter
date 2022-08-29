import { createSlice,  } from "@reduxjs/toolkit";

//TOOLKIT
const initialCounterState = { counter: 0, visibility: true }

//Se puede mutar el estado con toolkit, no hace falta return un objeto nuevo.
export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialCounterState,
    reducers: {
        increment(state, action){
            state.counter = state.counter + action.payload
        },
        decrement(state, action){
            state.counter = state.counter - action.payload
        },
        showCounter(state){
            state.visibility = !state.visibility 
        }
    }
})

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer