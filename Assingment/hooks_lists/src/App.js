import logo from './logo.svg';
import './App.css';

// All Life cycle in class component 
import Lifecycle from './Life cycle in class/Lifecycle.js';



// All hook in function component 
// usecontext
import ChildA from './hook in function/usecontext/ChildA.js';

// UseEffect
import Featch from './hook in function/UseEffect/Featch.js';

// CreateContext
import Main from './hook in function/CreateContext/Main.js';

// useRef
import Todo from './hook in function/useRef/Todo.js';

function App() {
  return (
    <div className="App">

      {/* All hook in function component  */}
      <Lifecycle />

      {/* useState  */}
      <ChildA />

      {/* useEffect with useState */}
      <Featch />

      {/* createContext  */}
      <Main />

      {/* useRef */}
      <Todo />

    </div>

  );
}

export default App;
