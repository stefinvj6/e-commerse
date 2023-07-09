import React from 'react'
import './Logout.css'

function logout() {
  return (
    <div className='logout-container'>
        <div className="logout-content">
            <h1>You are successfully logged out</h1>
            <p>Thank you for using our application.Have a great day.</p>
        </div>
    </div>
  )
}

export default logout