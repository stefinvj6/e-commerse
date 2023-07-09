import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import Footer from '../Components/Footer/Footer'
import Logout from '../Components/Logout/logout'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import Create from '../Components/Create/Create'

function RoutesLayout() {
  return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/logout' element={<Logout />}/>
                <Route path='/product/:id' element={<ProductDetails />}/>
                <Route path='/create' element={<Create />}/>
            </Routes>
            <Footer />
        </Router>

    </>
  )
}

export default RoutesLayout