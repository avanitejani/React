import logo from './logo.svg';
import './App.css';

// usecontext hook 
// import ChildA from './hooks/usecontext/ChildA';

// EX1 update usecontext hook 
import ChildA from './hooks/EX1/ChildA';

// yes no 
import Comp1, { A } from './hooks/yesNo/Comp1';


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

import Todoclass from './class/Todoclass';
import PropsType from './propstype/PropsType';



import UseMemo from './hooks/useMemo/UseMemo';

// loader 
import Load from './lazy/Load';

// callback hook 
import Acall from './hooks/callback/Acall';

// passwords 
import HidShow from './hooks/hideshow/HidShow';



function App() {

//   const website="MyWeb"
// const std={name:'avani',age:21}


  return (
    <div className="App">
      
        

        {/* // usecontext hook no componet */}
        {/* <ChildA /> */}

        {/* // EX1 usecontext hook no componet */}
        {/* <ChildA />

        <Comp1/> */}

        {/* <Main /> */}
        
        {/* <Cal/> */}

        {/* <Useeffect/> */}

      {/* <Featch/> */}
      {/* <JsonFeatch/> */}


      {/* json server --watch src/db.json --port 8001 */}
      {/* <Axios/> */}

      {/* <Todoclass/> */}

      {/* <PropsType list={std} site={website } /> */}

      {/* <UseMemo/> */}


      {/* <Load/> */}

      {/* <Acall/> */}

      <HidShow/>
      




      
    </div>
  );
}

export default App;
