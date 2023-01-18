import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action){
            const { payload } = action;
            state.todos = payload;
        },
        removeTodos(state){
            state.todos = []
        }
    }
})

export const {addTodo, removeTodos} = todoSlice.actions;
export default todoSlice.reducer;