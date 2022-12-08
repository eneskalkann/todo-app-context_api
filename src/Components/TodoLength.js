import React from 'react'
import { useTodoContext } from '../Context/GlobalContext'

function TodoLength() {
    const {todo} = useTodoContext();
  return (
    <div>
        <h2 className='text-metalicSunburst text-lg my-2'>You have <span className='text-maizeCrayola font-bold'>{todo.length}</span> items </h2>
    </div>
  )
}

export default TodoLength