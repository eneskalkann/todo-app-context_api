import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";
import TodoLength from "./Components/TodoLength";
import GlobalContext from "./Context/GlobalContext";
import { motion } from "framer-motion";

const variants ={
  hidden : {opacity:0},
  visible:{opacity:1},
  transition : {duration:1}
}

function App() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible" className="bg-tealBlue min-h-screen max-w-screen flex items-center justify-center bg-contain">
      <div className="flex-col text-center relative w-screen">
      <header>
        <h1 className='text-eggshell text-3xl font-bold mb-4'>Todo App</h1>
      </header>
      <GlobalContext>
        <TodoList/>
        <TodoLength/>
        <Todo/>
      </GlobalContext>
      </div>
    </motion.div>
  );
}

export default App;
