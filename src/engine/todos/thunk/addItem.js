import { setTodos } from "../TodoSlice";

export const addItem = (event, value, setValue) => (dispatch, state) => {
    event.preventDefault();
    const { todos } = state();
    dispatch(setTodos(
        [...todos.todos, {
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            desc: value,
        }],
        {
            delayMS: 1000,
        }
    ));
    setValue('');
}
