import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function Todo() {
    
    const todos = useSelector(state=>state.todos)
    
    const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {todos.map((to)=>(
        <li key={to.id} >
            {to.test}
            
            <button onClick={()=>dispatch(removeTodo(to.id))}>X</button>
        </li>
        
    ))}
      
    </>
  )
}
