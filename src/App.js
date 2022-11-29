import Todo from "./Components/Todo";
import GlobalContext from "./Context/GlobalContext";

function App() {
  return (
    <div className="bg-amber-200 h-screen w-screen">
      <header>
        <h1 className=''>Todo App</h1>
      </header>
      <GlobalContext>
        <Todo/>
      </GlobalContext>
    </div>
  );
}

export default App;
