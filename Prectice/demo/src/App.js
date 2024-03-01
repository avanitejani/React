// import logo from './logo.svg';
import './App.css';

// import Head from './Head';
import Header from './01_Header';
import Contact from './05_Contact';
import Home from './04_Home';


import { Routes, Route } from 'react-router-dom'


import { useState } from 'react';

// import Test from './Test';

import Test from './Test';
const name = "MyWeb"


// 27 feb
import Todo from './Todo';
// import Useref from './Useref';




function App() {

  return (
    <>
      <Todo />


    {/* <Head /> */}
    {/* <h1>hader</h1> */}

      {/* <Test/> */}
      
      {/* <Test webnme={name} /> */}

      {/* <Useref /> */}
      

    {/* <Header/> */}

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes> */}

    </>
  );
}

      export default App;
      
      
