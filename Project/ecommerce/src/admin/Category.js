import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Category = () => {
    const navigate = useNavigate()
    const [cat, setCat] = useState([])

    useEffect(() => {
        getCat()
    }, [])

    const getCat = () => {
        axios.get(`http://localhost:8000/category`).then((res) => {
            setCat(res.data)
            // console.log(res.data);
        })
    }

    const deleteCat = (index) => {
        axios.delete(`http://localhost:8000/category/${index}`).then(() => {
            getCat()
        })
    }
    const editCat = (id) => {
        navigate(`/admin/category/edit/${id}`)
    }

    return (

        <>
            <div className="container" >
                <div className="row">
                    <div className="col-md-6">
                        <Link to={'/admin/category/add'} className="btn btn-primary my-4">
                            <i className="fas fa-plus-circle mr-1"></i>Add Category
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col ">Category</th>
                                    <th></th>
                                    <th></th>

                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cat.length !== 0 ? (
                                    cat.map((res) => (
                                        <tr key={res.id}>
                                            <td className='fw-bold'>{res.name}</td>
                                            <td></td>
                                            <td></td>

                                            <td>
                                                <button onClick={() => deleteCat(res.id)} className='btn btn-outline-danger btn-sm text-secondary fw-bold '>
                                                    <i className="fas fa-trash-alt mr-1 "></i>Delete
                                                </button>
                                                <button onClick={() => editCat(res.id)} className='btn btn-outline-warning btn-sm text-secondary fw-bold mx-5 '>
                                                    <i className="fas fa-edit mr-1"></i>Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={2} className="text-center">No categories found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

       
    )
}

export default Category
