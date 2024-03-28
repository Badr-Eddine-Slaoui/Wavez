import { configureStore } from "@reduxjs/toolkit";
import merchSlice from "./merchSlice";
import logger from "redux-logger";
import printSlice from "./printSlice";

const store = configureStore({
    reducer:{
        merch: merchSlice,
        print: printSlice
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store