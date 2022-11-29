import React from 'react'
import { useTodoContext } from '../Context/GlobalContext'

function Todo() {

    const {todo} = useTodoContext();

  return (
    <ul>
        {
            todo.map((todo,index)=>(
                <li key={index}>
                    {todo}
                </li>
            ))
        }
    </ul>
  )
}

export default Todo