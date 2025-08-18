import { configureStore } from "@reduxjs/toolkit";
import store_redux from './store_redux'

export const store_redux_configure = configureStore({
    reducer: {
        counter: store_redux
    }
});