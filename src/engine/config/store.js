import { configureStore } from "@reduxjs/toolkit";
import { delay } from '../middleware/delay';
import { todoReducer } from "../todos/TodoSlice";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), delay, thunk]
})