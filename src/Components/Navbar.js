import React from 'react'
import './style.css';

export default function Navbar() {
  return (
    <div>

        {/* navibar */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 bg-dark">
          <div className="container">
            <a href="#services" className="navbar-brand" style={{fontWeight: 'bolder'}}>Travel Zone</a>
            <button type="button" className="navbar-toggler" data-bs-target="#navbarNav" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-lable="Toggle Navbar">
              <span className="navbar-toggler-icon" />
            </button> 
            <div className="collapse navbar-collapse" id="navbarNav">  
              <div className="mx-auto" /> {/* divide 2 sides */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#banner-image" className="nav-link active ">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link ">About</a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link ">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link ">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="#footer" className="nav-link ">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
    </div>
  )
}
