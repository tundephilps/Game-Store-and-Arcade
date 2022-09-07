import React from 'react'
import { FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaCartPlus, FaSearch } from "react-icons/fa";
//import { FiMenu } from "react-icons/fi";
//import { CgClose } from "react-icons/cg"
import "./Header.scss";
import Drop from './Drop';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"


const Header = ({ cartItem }) => {


  let navigate = useNavigate();


  return (
    
    <header class="header">

    <div class="header-top">
      <div class="container">

        <div class="countdown-text">
          Exclusive Black Friday ! Offer <span class="span skewBg">10</span> Days
        </div>

        <div class="social-wrapper">

          <p class="social-title">Follow us on :</p>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <FaPinterest />
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <FaTwitter />
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <FaFacebook />              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <FaLinkedin />
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>
    
    <div class="header-bottom skewBg" data-header>
      <div class="container">

        <a href="#" className='logo hover:text-yellow-800 w-[100%]'>Optimum Games</a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">

            <li class="navbar-item">
              <a href="/" class="navbar-link skewBg" data-nav-link>Home</a>
            </li>

            <li class="navbar-item">
              <a href="#live" class="navbar-link skewBg" data-nav-link>Live</a>
            </li>

            <li class="navbar-item">
              <a href="#features" class="navbar-link skewBg" data-nav-link>Features</a>
            </li>

            <li class="navbar-item">
              <a href="#shop" class="navbar-link skewBg" data-nav-link>Shop</a>
            </li>

            <li class="navbar-item">
              <a href="#blog" class="navbar-link skewBg" data-nav-link>Blog</a>
            </li>

            <li class="navbar-item">
              <a href="Arcade" class="navbar-link skewBg" data-nav-link>Arcade</a>
            </li>

          </ul>
        </nav>

        <div class="header-actions">

          <button href onClick={() => {navigate("/Cart");}} class="cart-btn" aria-label="cart">
           <FaCartPlus />

            <span class="cart-badge">{cartItem.length === 0 ? "" : cartItem.length}</span>
          </button>

          <button class="search-btn" aria-label="open search" data-search-toggler cartItem={cartItem}>
            <FaSearch />
          </button>
       


        </div>

        <Drop />
        
            
        
      </div>
     
      </div>

  
  </header>
  
 
  )
 
}

export default Header;
