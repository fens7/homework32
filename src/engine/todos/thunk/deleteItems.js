import { setTodos } from "../TodoSlice"

export const removeTasks = () => (dispatch) => {
    dispatch(setTodos([]))
}