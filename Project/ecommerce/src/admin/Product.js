import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Product = () => {

    const navigate = useNavigate()
    const [pro, setProduct] = useState([])

    useEffect(() => {
        getProudct()
    }, [])

    const getProudct = () => {
        axios.get('http://localhost:8000/product').then((res) => {
            setProduct(res.data)

        })
    }



    const deleteProduct = (index) => {
        axios.delete(`http://localhost:8000/product/${index}`).then((res) => {
            getProudct()

        })


    }

    const editProduct = (id) => {
        navigate(`/admin/product/edit/${id}`)
    }




    return (






        <>
            <div className="container " >
                <div className="row">
                    <div className="col-md-6">
                        <Link to={'/admin/product/add'} className="btn btn-primary my-4">
                            <i className="fas fa-plus-circle mr-1"></i>Add Product
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quntity</th>
                                    <th scope="col">Category</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {pro.length !== 0 ? (
                                    pro.map((res) => (
                                        <tr key={res.id}>
                                            <td><img height={'50px'} width={'50px'} src={res.productUrl} alt="" /></td>
                                            <td className='fw-bold'>{res.productName}</td>
                                            <td className='fw-bold'>{res.productPrice}</td>
                                            <td className='fw-bold'>{res.productQuantity}</td>
                                            <td className='fw-bold'>{res.productCategory}</td>

                                            <td>
                                                <button onClick={() => deleteProduct(res.id)} className='btn btn-outline-danger btn-sm text-secondary fw-bold '>
                                                    <i className="fas fa-trash-alt mr-1 "></i>Delete
                                                </button>
                                                <button onClick={() => editProduct(res.id)} className='btn btn-outline-warning btn-sm text-secondary fw-bold mx-5 '>
                                                    <i className="fas fa-edit mr-1"></i>Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center text-secondary fw-bold font-monospace fs-3 ">No Product found</td>
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

export default Product