import React from 'react'
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types'

const NavBar = ()=>{
  

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/">NewsWala</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Bussiness">Bussiness</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Entertainment">Entertainment</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Techonology">Techonology</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> 
    </div>
  </div>
</nav>
      </div>
    )
  }



export default NavBar
