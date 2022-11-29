import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";
import GlobalContext from "./Context/GlobalContext";

function App() {
  return (
    <div className="bg-tealBlue min-h-screen max-w-screen flex items-center justify-center bg-contain">
      <div className="flex-col text-center relative w-screen">
      <header>
        <h1 className='text-eggshell text-3xl font-bold'>Todo App</h1>
      </header>
      <GlobalContext>
        <TodoList/>
        <Todo/>
      </GlobalContext>
      </div>
    </div>
  );
}

export default App;
