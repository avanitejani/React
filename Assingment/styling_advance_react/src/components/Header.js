// import img1 from './images/see.jpg'
import React from 'react'
import './style.css'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <>
           
            <header>
                <div className="header">
                    <div className="left">
                        <h1>Shapely Demo</h1>
                    </div>
                    <div className="right">
                        <ul>
                            <li><NavLink activeClassName="active" to={'/'}>Home</NavLink></li>
                            <li><NavLink activeClassName="active" to={'/blog'}>Blog</NavLink></li>
                            <li><a href="">Protfolio</a></li>
                            <li className="drop"><a href="">About <i className="fa-solid fa-caret-down" ></i></a>
                                <div className="d1">
                                    <ul>
                                        <li><a href="">Page Image Aligment</a></li>
                                        <li><a href="">Page Markup And Formatting</a></li>
                                        <li><a href="">Cleaning Floats</a></li>
                                        <li><a href="">Page With Comments</a></li>
                                        <li>Page With Comments disabled</li>


                                    </ul>
                                </div>
                            </li>




                            <li className="drop"><a href="">Level <i className="fa-solid fa-caret-down"></i></a>


                                {/* <div className="cont">
                                    <ul>
                                        <li className="path"><a href="">Level 1 <i className="fa-solid fa-caret-right"></i></a>
                                            <div className="swara">
                                                <ul>
                                                    <li>
                                                        <a href="">Level 1a</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Level 1b</a>
                                                    </li>
                                                </ul>
                                            </div>


                                        </li>
                                        <li>Level 2</li>
                                        <li>Level 3</li>
                                    </ul>
                                </div> */}

                            </li>
                        </ul>

                        {/* <li><a href="">Shop</a></li>
                      
                        <li className="find"><i className="fa-solid fa-magnifying-glass"></i></li>

                        <div className="search">

                            <input type="text" placeholder="Type Here" value />
                            <button type="submit" className="searchsubmit">
                                <span className="screen">Search</span>
                            </button>

                        </div> */}



                    </div>
                </div>
            </header> 

        </>
    )
}

export default Header