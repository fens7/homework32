import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    setTodos: {
      prepare: (payload, meta) => ({ payload, meta }),
      reducer: (state, action) => {
        const { payload } = action;
        state.todos = payload;
      }
    }
    ,
  },
});

export const {setTodos} = todos.actions;
export const todoReducer = todos.reducer;