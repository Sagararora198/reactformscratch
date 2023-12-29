import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function Todo() {
    
    const todos = useSelector(state=>state.todos)
    
    const dispatch = useDispatch()
  return (
    <>
    <div className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black" ></div>
    {todos.map((to)=>(
        <li className='border outline-none w-full bg-transparent rounded-lg  '  key={to.id} >
            {to.test}
            
            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0" onClick={()=>dispatch(removeTodo(to.id))}>❌</button>
        </li>
        
    ))}
      
    </>
  )
}
