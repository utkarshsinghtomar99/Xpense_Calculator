import { configureStore } from "@reduxjs/toolkit";
import xpenseReducer from "./xpense/XpenseSlice";

const store = configureStore( {
    reducer: {
        xpense: xpenseReducer,
    }
} );

export default store;