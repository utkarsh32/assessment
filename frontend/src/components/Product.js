import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  console.log('products-------',products)
  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); // Redirect to Login if token is missing
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/products', {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        });
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        alert('Session expired. Please log in again.');
        navigate('/login'); // Redirect to Login if token is invalid
      }
    };

    fetchProducts();
  }, [navigate]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
