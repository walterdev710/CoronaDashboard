import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src="/assets/images/coronavirus-logo.png" className='me-2' width="150px" alt="" />
                <span className='fw-bold  text-uppercase'>Coronavirus</span>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link me-0 text-white fw-bold text-uppercase " aria-current="page" to="/">Bosh sahifa</Link>
                  </li>
                  </ul>
                
              </div>
            </div>
      </nav>
  )
};
