// import axios from 'axios'
import React, { useRef, useState } from 'react'
import axios from 'axios'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {

    const navigater = useNavigate()


    // register  
    const [regiData, setRegiData] = useState({ name: '', email: '', password: '', isadmin: false })
    // only for validation 
    const [register, setRegError] = useState({})



    // login  
    const [loginData, setloginData] = useState({ email: '', password: ''})
    // only for validation 
    const [loginError, setloginError] = useState({})



    // register  
    // register ni badhi fild ma koi bi data aavse tyare regichange aama aavu joye ne aama  [regiData, setRegiData]  change thavu joye
    const regichange = (e) => {

        // checkbox ni value leva mate if condition and baki ni fild ni value leva else
        if (e.target.name == 'isadmin') {
            setRegiData({ ...regiData, [e.target.name]: e.target.checked })
        }
        else {
            const { name, value } = e.target
            setRegiData({ ...regiData, [name]: value })
        }
    }



    // login 
    const loginchange = (e) => {
        const { name, value } = e.target
        setloginData({ ...loginData, [name]: value })

    }
    
    const loginsubmit = async (e) => {
        // alert(loginData)
        // console.log(loginData);
        
        e.preventDefault() // form ate submit ny thay krvi tyare j thase and jya karvi tya thase

        // validation 
        let validateLogin = {}
        var re = /\S+@\S+\.\S+/;

        if (loginData.email == '' || re.test(loginData.email) == false) {
            validateLogin.email = "please Enter valid Email"
        }
        if (loginData.password == '') {
            validateLogin.password = "please Enter valid Password"
        }

        setloginError(validateLogin)
        // api
        if (Object.keys(validateLogin).length == 0) {
            // get thi data aase j dblClick.json ma 6e te
            // axios.get(`http://localhost:8000/user?email=${loginData.email}`).then((result) => {
            //     console.log(result.data[0]);
            // })

                try {
                    let logindata = await axios.get(`http://localhost:8000/user?email=${loginData.email}`)
                    console.log(logindata.data[0]);
                    
                    if (logindata.data[0].password == loginData.password) {   


                        localStorage.setItem('user', logindata.data[0].name)
                        localStorage.setItem('userid', logindata.data[0].id)
                        localStorage.setItem('admin', logindata.data[0].isadmin)

                        if (logindata.data[0].isadmin) {
                            navigater('/admin')
                        }
                        else {
                            navigater('/')

                        }
                        
                    }
                    else{
                        // alert('undefined error')
                        setloginError({ password: 'please Enter valid Password' })
                    }
                    

                } catch (error) {
                    setloginError({ email: 'please Enter valid email' })
                }
                
          
            
        }

     }





    // regiser button pr click krvi tyare tyare aa submit thase  onchange
    const registersubmit = (e) => {
        e.preventDefault()
        // console.log(regiData);


        // validation 
        let validateRegister = {}
        var re = /\S+@\S+\.\S+/;

        if (regiData.name == '') {
            validateRegister.name = "please Enter valid name"
        }
        if (regiData.email == '' || re.test(regiData.email) == false) {
            validateRegister.email = "please Enter valid Email"
        }
        if (regiData.password == '') {
            validateRegister.password = "please Enter valid Password"
        }

        setRegError(validateRegister)

        // api

        if (Object.keys(validateRegister).length == 0) 
        // alert('form submited')
            // aya api call kesu 
            // json-server --watch src/db.json --port 8000   
            // npm i axios
            axios.post(`http://localhost:8000/user`, regiData).then((res) => {
                // npm i react-toastify

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

                // navigate('/login')

                // login and register bv sem page pr chhe aetle // navigate('/login') aam aa page pr ny jai skay window method no use krvo pdse  
                window.location.href = '/login';
            })


    }
 


    return (
        <>
            <ToastContainer />
            <main style={{ paddingTop: 90 }}>
                <div className="mb-4 pb-4" />
                <section className="login-register container">
                    <h2 className="d-none">Login &amp; Register</h2>
                    <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link nav-link_underscore active"
                                id="login-tab"
                                data-bs-toggle="tab"
                                href="#tab-item-login"
                                role="tab"
                                aria-controls="tab-item-login"
                                aria-selected="true"
                            >
                                Login
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link nav-link_underscore"
                                id="register-tab"
                                data-bs-toggle="tab"
                                href="#tab-item-register"
                                role="tab"
                                aria-controls="tab-item-register"
                                aria-selected="false"
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content pt-2" id="login_register_tab_content">
                        <div
                            className="tab-pane fade show active"
                            id="tab-item-login"
                            role="tabpanel"
                            aria-labelledby="login-tab"
                        >
                            <div className="login-form">
                                <form name="login-form" className="needs-validation" onSubmit={loginsubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            name="email"
                                            type="email"
                                            className="form-control form-control_gray"
                                            id="customerNameEmailInput1"
                                            onChange={loginchange}
                                            placeholder="Email address *"
                                            
                                        />
                                        <label htmlFor="customerNameEmailInput1">Email address *</label>
                                        {loginError.email && (<span style={{ color: 'maroon' }} > {loginError.email} </span>)}
                                    </div>
                                    <div className="pb-3" />
                                    <div className="form-floating mb-3">
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control form-control_gray"
                                            id="customerPasswodInput"
                                            onChange={loginchange}
                                            placeholder="Password *"
                                            
                                        />
                                        <label htmlFor="customerPasswodInput">Password *</label>
                                        {loginError.password && (<span style={{ color: 'maroon' }} > {loginError.password} </span>)}
                                    </div>
                                    <div className="d-flex align-items-center mb-3 pb-2">
                                        <div className="form-check mb-0">
                                            <input
                                                name="remember"
                                                className="form-check-input form-check-input_fill"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefault1"
                                            />
                                            <label
                                                className="form-check-label text-secondary"
                                                htmlFor="flexCheckDefault1"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="reset_password.html" className="btn-text ms-auto">
                                            Lost password?
                                        </a>
                                    </div>

                                    <input
                                        className="btn btn-primary w-100 text-uppercase" value={'Log In'} type="submit"/>   

                                    {/* <button
                                        className="btn btn-primary w-100 text-uppercase"
                                        type="submit"
                                    >
                                        Log In
                                    </button> */}
                                    {/* <div className="customer-option mt-4 text-center">
                                        <span className="text-secondary">No account yet?</span>
                                        <a href="#register-tab" className="btn-text js-show-register">
                                            Create Account
                                        </a>
                                    </div>/ */}
                                </form>
                            </div>
                        </div>

                        {/* register */}

                        <div
                            className="tab-pane fade"
                            id="tab-item-register"
                            role="tabpanel"
                            aria-labelledby="register-tab"
                        >
                            <div className="register-form">
                                <form name="register-form" onSubmit={registersubmit} className="needs-validation" noValidate="">

                                    {/* 3 input na 1k sathe crud thay  */}

                                    <div className="form-floating mb-3">
                                        <input
                                            name="name"
                                            type="text"
                                            onChange={regichange}
                                            className="form-control form-control_gray"
                                            id="customerNameRegisterInput"
                                            placeholder="Username"
                                            required=""
                                        />
                                        <label htmlFor="customerNameRegisterInput">Username</label>
                                        {register.name && (<span style={{ color: 'red' }} > {register.name} </span>)}

                                    </div>


                                    <div className="pb-3" />
                                    <div className="form-floating mb-3">
                                        <input
                                            name="email"
                                            type="text"
                                            onChange={regichange}
                                            className="form-control form-control_gray"
                                            id="customerEmailRegisterInput"
                                            placeholder="Email address *"
                                            required=""
                                        />
                                        <label htmlFor="customerEmailRegisterInput">
                                            Email address *
                                        </label>
                                        {register.email && (<span style={{ color: 'green' }} > {register.email} </span>)}
                                    </div>
                                    <div className="pb-3" />
                                    <div className="form-floating mb-3">
                                        <input
                                            name="password"
                                            type="password"
                                            onChange={regichange}
                                            className="form-control form-control_gray"
                                            id="customerPasswodRegisterInput"
                                            placeholder="Password *"
                                            required=""
                                        />
                                        <label htmlFor="customerPasswodRegisterInput">Password *</label>
                                        {register.password && (<span style={{ color: 'maroon' }} > {register.password} </span>)}
                                    </div>

                                    <div className="d-flex align-items-center mb-3 pb-2">
                                        <div className="form-check mb-0">
                                            <input
                                                name="isadmin"
                                                className="form-check-input form-check-input_fill"
                                                type="checkbox"
                                                defaultValue=""
                                                onChange={regichange}
                                                id="flexCheckDefault1"
                                            />
                                            <label
                                                className="form-check-label text-secondary"
                                                htmlFor="flexCheckDefault1"
                                            >
                                                is admin
                                            </label>

                                        </div>
                                        <a href="reset_password.html" className="btn-text ms-auto">
                                            you are a admin
                                        </a>
                                    </div>





                                    <div className="d-flex align-items-center mb-3 pb-2">
                                        <p className="m-0">
                                            Your personal data will be used to support your experience
                                            throughout this website, to manage access to your account, and
                                            for other purposes described in our privacy policy.
                                        </p>
                                    </div>
                                    <button
                                        className="btn btn-primary w-100 text-uppercase"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default LoginRegister