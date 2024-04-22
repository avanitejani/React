import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('admin')
    toast.success('register susseccfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    navigate('/login')
  }
  return (
    <>
      <ToastContainer />
      <nav class="navbar navbar-expand-lg navbar-custom" style={{ backgroundColor: '#e4e4e4' }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Admin Panel</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <button class="btn btn-outline-light btn-logout" onClick={() => {
                  logout()
                }}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header