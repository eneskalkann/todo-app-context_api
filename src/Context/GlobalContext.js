import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

const defaultTodo = ["Learn new things for web or mobile"]

const GlobalProvider = ({children}) => {
    const  [todo,setTodo] = useState(defaultTodo);

    const addTodo = (newItems) => {
        setTodo([...todo,newItems])
    }

    const deleteTodo = (Index) => {
        const deletedTodos = todo.filter((i,index) => index !== Index);
        setTodo(deletedTodos)
    }

    const Values = {
        todo,
        addTodo,
        deleteTodo
    };

    return(
        <GlobalContext.Provider value={Values} >{children}</GlobalContext.Provider>
    )
}

export const useTodoContext = () => useContext(GlobalContext);

export default GlobalProvider;