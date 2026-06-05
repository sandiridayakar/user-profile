import React from 'react'
import './Nav.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import profileImg from '../assets/kreatikar-icon-3418201_1920.png';

const Nav = () => {
  return (
    <div id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="sub-nav" className="container-fluid">

        <img src={profileImg} alt="profile" width="120" height="60" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ol className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) =>{
               return isActive ? "nav-link active-link" : "nav-link"
              }} >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>{
               return isActive ? "nav-link active-link" : "nav-link"
              }} to="/Create">Create</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to='/Contactus' className={({ isActive }) =>{
               return  isActive ? "nav-link active-link" : "nav-link"
              }}>Contact us</NavLink>
            </li>


            {/* <li className="nav-item">
              <NavLink className={({ isActive }) =>{
               return isActive ? "nav-link active-link" : "nav-link"
              }} to="/Login">Login</NavLink>
            </li> */}
          </ol>
        </div>

      </div>
    </div>
  );
};

export default Nav