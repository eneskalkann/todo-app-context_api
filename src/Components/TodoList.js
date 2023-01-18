import React, { useState } from 'react'
import { useTodoContext } from '../Context/GlobalContext'
import {BsFillPlusSquareFill} from 'react-icons/bs'

function TodoList() {

    const [items , setItems] = useState("");
    const {addTodo} = useTodoContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        //for the empty submits
        if(!items){
            return;
        }

        addTodo(items);
        setItems("");
    }

  return (
    <form onClick={handleSubmit} className='whitespace-nowrap'>
        <input placeholder='Add some ToDo' type="text" maxLength="40" value={items} onChange={(e) => setItems(e.target.value)} className='w-72 md:w-96 h-9 bg-eggshell px-2 italic border-0' />
        <button className='text-maizeCrayola ml-3 md:ml-7'><BsFillPlusSquareFill/></button>
    </form>
  )
}

export default TodoList