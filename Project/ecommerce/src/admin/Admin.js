import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import {Outlet} from 'react-router-dom'

const Admin = () => {
  return (
      <>

        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                      <div className="col-md-3 sidebar">
                        <Sidebar />
                    </div>
                      <div className="col-md-9 mid-containt" >
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>

          {/* <Header />
          <Outlet/>
          <Footer/> */}
      
      </>
  )
}

export default Admin