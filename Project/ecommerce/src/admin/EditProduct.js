
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EditProduct = () => {

  const navagate = useNavigate()
  // url mathi data lavva mate useparm no use thay 

  const { id } = useParams();
  const [product, setProduct] = useState({
    productUrl: "",
    productName: "",
    productPrice: "",
    productQuantity: "",
    productCategory: "",
  });
  const [cat, setCat] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/product?id=${id}`).then((res) => {
      setProduct(res.data[0]);
    });

    axios.get(`http://localhost:8000/category`).then((res) => {
      setCat(res.data);
    });
  }, []);

  const productSet = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/product/${id}`, product).then(() => {
      navagate('/admin/product')
    })

  };

  return (
    <>
      <div className="container">
        <h1 className="mb-4 text-primary">Update Product</h1>
        <form onSubmit={submitProduct}>

          <div className="mb-3 bg-light  p-2 rounded">
            <label htmlFor="productUrl" className="form-label">
              Product Image
            </label>
            <input
              type="url"
              className="form-control"
              id="productUrl"
              onChange={productSet}
              name="productUrl"
              defaultValue={product.productUrl}
            />
          </div>

          <div className="mb-3 bg-light p-2 rounded">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              defaultValue={product.productName}
              onChange={productSet}
            />
          </div>
          <div className="mb-3 bg-light p-2 rounded">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              defaultValue={product.productPrice}
              className="form-control"
              id="productPrice"
              name="productPrice"
              onChange={productSet}
            />
          </div>
          <div className="mb-3 bg-light p-2 rounded">
            <label htmlFor="productQuantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              defaultValue={product.productQuantity}
              className="form-control"
              id="productQuantity"
              onChange={productSet}
              name="productQuantity"
            />
          </div>

          
          <div className="mb-3 bg-light p-2 rounded">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              name="productCategory"
              className="form-control text-dark"
              id="productCategory"
              onChange={productSet}
              value={product.productCategory}
            >
              {cat.map((res) => {
                return <option value={res.name}>{res.name}</option>;
              })}

              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;