import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { addTo } from './Slice/AddToCart';
import { useDispatch } from 'react-redux';


import Hade from './Hade';

function App() {
 
  // useState 
  const [cartData, setCartData] = useState(0)

  // useDispatch
  const dispatch = useDispatch()

  

  return (
    <div className="App">

      <Hade/>

      <h1>product</h1>
      <input type="number" id='cartitem' />

      <button onClick={() => {
        dispatch(addTo(document.getElementById('cartitem').value))
      }}>Add To cart</button>
     
    </div>
  );
}

export default App;
