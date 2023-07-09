import React from 'react'
import './Create.css'
import { useState } from 'react'
import axios from 'axios';

function Create() {

    const [product_image, setproduct_image] = useState('');
    const [product_name, setproduct_name] = useState('')
    const [product_description, setproduct_description] = useState('');
    const [product_price, setproduct_price] = useState('');
    const [categories, setcategories] = useState('');

    const handlesubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/product',{product_image,product_name,product_description,product_price,categories})
        .then((response) => {
          console.log(response.data)
        }).catch((error) => {
          console.log(error)
        });
    }
  return (
    <>
        <div className="create-product">
        <form onSubmit={handlesubmit} className='create-form'>
            <h1 className='h1'>ADD PRODUCT</h1>
            <label>Image</label>
            <input value={product_image} onChange={(e)=>setproduct_image(e.target.value)} className='product-Image' type='text' name="product_image" />
            <label>Name</label>
            <input value={product_name} onChange={(e)=>setproduct_name(e.target.value)} className='product-name' type='text' name="product_name" />
            <label>Description</label>
            <input value={product_description} onChange={(e)=>setproduct_description(e.target.value)} className='product-Description' type='text' name="product_description" />
            <label>Price</label>
            <input value={product_price} onChange={(e)=>setproduct_price(e.target.value)} className='product-Price' type='text' name="product_price"/>
            <label>Category</label>
            <input value={categories} onChange={(e)=>setcategories(e.target.value)} className='product-category' type='text' name="categories" />
            <input type="submit" className="submitButton" />
        </form>
        </div>
    </>
  )
}

export default Create