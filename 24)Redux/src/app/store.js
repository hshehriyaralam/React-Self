import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/count/countSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/api";



export const store = configureStore({
    reducer : {
        counter : counterReducer,
       [api.reducerPath] : api.reducer
    },

    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})

// ✅ Listeners setup karo
setupListeners(store.dispatch)