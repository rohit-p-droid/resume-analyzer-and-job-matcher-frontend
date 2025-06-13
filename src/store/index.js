import { configureStore } from "@reduxjs/toolkit";
import { authReducer, themeReducer } from "../reducers";


const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
    }
})


export default store;