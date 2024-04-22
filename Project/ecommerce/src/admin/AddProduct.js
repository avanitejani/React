import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {

    const navigate = useNavigate()

    const [product, setProduct] = useState({ productUrl: '', productName: '', productPrice: '', productQuantity: '', productCategory: '' })
    
    const [cat, setCat] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/category`).then((res) => {
            setCat(res.data)
        })

        // console.log(product);

    }, [product])

    const productSet = (e) => {
        const {name,value} = e.target
        setProduct({ ...product ,[name]:value})
    }

    const submitProduct = (e) => {
        e.preventDefault() 
        axios.post(`http://localhost:8000/product`,product).then((res) => {
            navigate('/admin/product')
            setCat(res.data)
        })
     }

    

  return (

      <>
          <div className="container">
              <h1 className="mb-4 text-primary">Add Product</h1>
              <form onSubmit={submitProduct}>

                  <div className="mb-3 bg-light  p-2 rounded">
                      <label htmlFor="productUrl" className="form-label">Product Image</label>
                      <input
                          type="url"
                          className="form-control"
                          id="productUrl"
                          onChange={productSet}
                          name='productUrl'
                          required
                      />
                  </div>

                  <div className="mb-3 bg-light p-2 rounded">
                      <label htmlFor="productName" className="form-label">Product Name</label>
                      <input
                          type="text"
                          className="form-control"
                          id="productName"
                          name='productName'
                          onChange={productSet}
                          required
                      />
                  </div>
                  <div className="mb-3 bg-light p-2 rounded">
                      <label htmlFor="productPrice" className="form-label">Product Price</label>
                      <input
                          type="number"
                          className="form-control"
                          id="productPrice"
                          name='productPrice'
                          onChange={productSet}
                          required
                      />
                  </div>
                  <div className="mb-3 bg-light p-2 rounded">
                      <label htmlFor="productQuantity" className="form-label">Product Quantity</label>
                      <input
                          type="number"
                          className="form-control"
                          id="productQuantity"
                          onChange={productSet}
                          name='productQuantity'
                          required
                      />
                  </div>

                  <div className="mb-3 bg-light p-2 rounded">
                      <label htmlFor="productCategory" className="form-label">Product Category</label>
                      <select
                          name='productCategory'
                          className="form-select  text-dark"
                          id="productCategory"
                          onChange={productSet}
                          required
                      >
                          <option value="">Select Category</option>
                          {cat.map((res) => (
                              <option key={res.id} value={res.name}>{res.name}</option>
                          ))}
                      </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
      </>

      
  )
}

export default AddProduct