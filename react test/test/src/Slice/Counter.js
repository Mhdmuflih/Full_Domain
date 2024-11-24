import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState:initialValue,
    reducers:{
        Increment:(state)=> {
            state.count +=1;
        },
        Decrement: (state) => {
            if(state.count > 0) {
                state.count -= 1;
            }
        },
        Reset: (state)=> {
            state.count = 0;
        }
    }
})

export const {Increment, Decrement, Reset} = counterSlice.actions;

const counter = counterSlice.reducer;
export default counter;