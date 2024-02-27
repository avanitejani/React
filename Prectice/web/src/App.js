// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Blog from './Blog';

// import routes, routen and also import index.js in import BrowserRouter  with import in header pade in Link, NavLink

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
