import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/count/countSlice'



export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})
