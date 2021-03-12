import { createSlice } from '@reduxjs/toolkit'

// const [todoList, setTodoList] = useState([])
// setTodoList(action)

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: ( state, action ) => {
            //state = current state of the saveTodo, action = function that gets executed when
            //the redux is shot in
            state.todoList.push(action.payload)
        }
    }
});

export const { saveTodo } = todoSlice.actions

export default todoSlice.reducer