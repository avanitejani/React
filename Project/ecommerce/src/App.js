import logo from './logo.svg';
import './App.css';

// npm i react - router - dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './admin/Admin';
import { Home } from './user/Home';
import LoginRegister from './pages/LoginRegister';

import Shop from './pages/Shop';
import Dashboard from './admin/Dashboard';
import Category from './admin/Category';
import Product from './admin/Product';
import AddCat from './admin/AddCat';
import AddProduct from './admin/AddProduct';

import { PrivateRouter } from './PrivateRoutes';
import EditCategory from './admin/EditCategory';
import EditProduct from './admin/EditProduct';

import {Category as Cat} from './user/Category';
import ViewProduct from './user/ViewProduct';

import { UserPrivate } from './user/UserPrivate';
import Cart from './user/Cart';




function App() {
  return (
    <div >

      <>

        

        <BrowserRouter>
          <Routes>
          <Route element={<PrivateRouter />}>
              <Route path='/admin' element={<Admin />}>
                  <Route path='/admin/dashboard' element={<Dashboard />}></Route>
                  <Route path='/admin/category' element={<Category/>}></Route>
                  <Route path='/admin/product' element={<Product />}></Route>
                  <Route path='/admin/category/add' element={<AddCat />}></Route>
                  <Route path='/admin/category/edit/:id' element={<EditCategory/>}></Route>
                  <Route path='/admin/product/add' element={<AddProduct />}></Route>
                  <Route path='/admin/product/edit/:id' element={<EditProduct/>}></Route>
              </Route>
          </Route>
              <Route path='/' element={<Home />}>
                  {/* change on change outlet  aama */}
                  <Route path='/' element={<Shop />}></Route>
                  <Route element={<UserPrivate/>}>
                      <Route path='/cart' element={<Cart/>}></Route>
                  </Route>
              <Route path='/login' element={<LoginRegister />}></Route>
              <Route path='/category/:id' element={<Cat />}></Route>
              <Route path='/product/:id' element={<ViewProduct/>}></Route>
              </Route>
          </Routes>
        </BrowserRouter>

      </>

    </div>
  );
}


export default App;


{/* <Route path='/product/:id' element={<ViewProduct />}></Route> */}