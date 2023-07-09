import React, {  useState,useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    const [product,setProduct] = useState([])

    

    useEffect(() => {
      axios.get('http://localhost:8000/product')
      .then((response) => {
        console.log(response.data)
        setProduct(response.data)
      }).catch((error) => {
        console.log(error)
      });
    }, [])
  return (  
   
    <div className='product-grid'>
      {product.map((obj)=>
        <div className="product">
          {/* <div className='heart'></div> */}
          {/* <img className='wishlist' src="./wishlist.jpg" alt="" /> */}
          <img className='product-img' src={obj.product_image} alt="alternative" />
          <h2>{obj.product_name}</h2>
          <p><span className='price'>{obj.product_price}</span></p>
          <Link to={`./product/${obj._id}`}>
          <button className='product-button' >Product Details</button>
          </Link>
        </div>
        )}

    </div>

  )
}

export default Home