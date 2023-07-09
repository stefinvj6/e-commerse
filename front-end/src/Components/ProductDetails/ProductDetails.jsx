import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDetails.css';
import { Link } from 'react-router-dom';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const url = new URL(document.URL);
  const searchParams = url.pathname;

  useEffect(() => {
    axios
      .get('http://localhost:8000' + searchParams)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBuyNow = ()=>{
    window.confirm('This Product is out of stock')
  }

  return (
    <div>
      {product ? (
        <div className='product-details-container'  >
          <img className='product-image' src={product.product_image} alt='image' />
          <div className='product-info'>
            <h2 className='product-title'>{product.product_name}</h2>
            <p className='product-description'>{product.product_description}</p>
            <p className='product-price'>{product.product_price}</p>
            <button onClick={handleBuyNow} className='bynow-btn'>Buy Now</button>
            <Link to={'/'}>
            <button className='goback-btn'>Go Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetails;
