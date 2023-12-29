import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        test:"hello"

    }]

}

export const todoSlice = createSlice({
    name:'todo',  // name can be anything (will be shown in redux toolkit in browser)
    initialState,
    reducers:{   // reducers m aate hai properities and function
        addTodo: (state,action)=>{  //state will give access to the current value and action will provide values
            const todo = {
                id:nanoid(),
                test:action.payload
            }
            state.todos.push(todo)
        },  //in context api we only declare the function here but in redux we define our function here only

        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }

    }

})

export const {addTodo,removeTodo} =todoSlice.actions

export default todoSlice.reducer