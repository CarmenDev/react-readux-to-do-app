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
        },

        setCheck: (state, action) => {
            // map through to do list
            state.todoList.map(item=>{
                if (action.payload === item.id) {
                    if (item.done === true) {
                        item.done = false
                    } else {
                        item.done=true
                    }
                }
            })
        }
    }
});

export const { saveTodo, setCheck } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer