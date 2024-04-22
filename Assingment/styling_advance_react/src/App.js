import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Firstpage from './components/Firstpage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Potfoliyo from './components/Potfoliyo';
import Level from './components/Level';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Firstpage />




      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='Potfoliyo' element={<Potfoliyo />} />
      </Routes>

      <Blog />
      <Level />
      <About />


      <Footer />
    </div>
  );
}

export default App;
