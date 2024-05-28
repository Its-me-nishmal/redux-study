import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState: {value:0},
    reducers: {
    increment: (state,action) => { state.value += Number(action.payload) || 1 },
    degrement: (state,action) => { state.value -= Number(action.payload) || 1 },
    reset: (state) => {state.value = 0}
    }
})

export const { increment, degrement, reset } = counterSlice.actions;
export default counterSlice.reducer;