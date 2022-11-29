import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

const defaultTodo = ["Learn new things for web or mobile"]

const GlobalProvider = ({children}) => {
    const  [todo,setTodo] = useState(defaultTodo);

    const Values = {
        todo,
    };

    return(
        <GlobalContext.Provider value={Values} >{children}</GlobalContext.Provider>
    )
}

export const useTodoContext = () => useContext(GlobalContext);

export default GlobalProvider;