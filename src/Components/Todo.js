import React from 'react'
import { useTodoContext } from '../Context/GlobalContext'
import { AiTwotoneDelete } from 'react-icons/ai'

function Todo() {

    const { todo, deleteTodo } = useTodoContext();

    return (
        <div>
            {
                todo.map((todo, index) => (
                    <div className='px-10 py-1 mt-2 flex items-center justify-center break-all'>
                        <h3 key={index} className='font-medium bg-eggshell px-4 py-3 w-72 md:w-4/12 break-words bg-white flex items-center justify-center rounded-lg text-metalicSunburst'>
                            {todo}
                        </h3>
                        <button onClick={() => deleteTodo(index)} ><AiTwotoneDelete className="text-maizeCrayola ml-3 md:ml-7 text-xl" /></button>
                    </div>
                ))
            }
        </div>
    )
}

export default Todo