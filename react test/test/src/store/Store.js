import { configureStore } from "@reduxjs/toolkit";
import counter from "../Slice/Counter";

const store = configureStore({
    reducer: {
        counter: counter
    }
})

export default store;