import logo from './logo.svg';
import './App.css';

// usecontext hook 
// import ChildA from './hooks/usecontext/ChildA';

// EX1 update usecontext hook 
import ChildA from './hooks/EX1/ChildA';

// yes no 
import Comp1 from './hooks/yesNo/Comp1';


// light and dark mode
import Main from './hooks/lightDark/Main';

//calculator 
import Cal from './hooks/calculator/Cal';

// use efect 
import Useeffect from './hooks/UseEffect/Useeffect';
import Featch from './hooks/UseEffect/Featch';


// api calling 
import JsonFeatch from './hooks/UseEffect/JsonFeatch';
import Axios from './hooks/UseEffect/Axios';

function App() {
  return (
    <div className="App">
      
        

        {/* // usecontext hook no componet */}
        {/* <ChildA /> */}

        {/* // EX1 usecontext hook no componet */}
        {/* <ChildA />

        <Comp1/> */}

        <Main />
        
        {/* <Cal/> */}

        {/* <Useeffect/> */}

      {/* <Featch/> */}
      {/* <JsonFeatch/> */}
      <Axios/>

      
    </div>
  );
}

export default App;
