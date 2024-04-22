import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if (categoryId) {
      fetchCategory(categoryId);
    }
  }, [categoryId]);

  const fetchCategory = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/category/${id}`);
      setCategoryName(response.data.name);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/category/${categoryId}`, { name: categoryName });
      navigate('/admin/category');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <>
      <h1>Edit Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            value={category.name}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </>
  );
};

export default EditCategory;
