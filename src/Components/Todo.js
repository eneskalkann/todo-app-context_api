import React from 'react'
import { useTodoContext } from '../Context/GlobalContext'
import { AiTwotoneDelete } from 'react-icons/ai'
import { motion , AnimatePresence} from 'framer-motion';

const variants ={
    hidden : {opacity:0},
    visible:{opacity:1},
    transition : {duration:1}
}

function Todo() {

    const { todo, deleteTodo } = useTodoContext();

    return (
        <AnimatePresence>
            {
                todo.map((todo, index) => (
                    
                    <ul className='px-10 py-1 mt-2 flex items-center justify-center break-all'>
                        <motion.li variants={variants} initial="hidden" animate="visible" exit="hidden" key={index} className='font-medium bg-eggshell px-4 py-3 w-72 md:w-4/12 break-words bg-white flex items-center justify-center rounded-lg text-metalicSunburst'>
                            {todo}
                        </motion.li>
                        <button onClick={() => deleteTodo(index)} ><AiTwotoneDelete className="text-maizeCrayola ml-3 md:ml-7 text-xl" /></button>
                    </ul>
                ))
            }
        </AnimatePresence>
    )
}

export default Todo