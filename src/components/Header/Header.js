import React from 'react'
import { FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaCartPlus, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg"
import "./Header.scss";


const Header = () => {




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

        <a href="#" class="logo">Optimum Games</a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">

            <li class="navbar-item">
              <a href="#home" class="navbar-link skewBg" data-nav-link>Home</a>
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
              <a href="#" class="navbar-link skewBg" data-nav-link>Contact</a>
            </li>

          </ul>
        </nav>

        <div class="header-actions">

          <button class="cart-btn" aria-label="cart">
           <FaCartPlus />

            <span class="cart-badge">0</span>
          </button>

          <button class="search-btn" aria-label="open search" data-search-toggler>
            <FaSearch />
          </button>

          <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
            <FiMenu class="" />
           
          </button>

        </div>

      </div>
    </div>

  </header>


  )
}

export default Header;

/*
window.onload = function(){
    const navbar = document.querySelector("[data-navbar]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const navbarToggler = document.querySelector("[data-nav-toggler]");




    navbarToggler.addEventListener("click", function () {
        navbar.classList.toggle("active");
        this.classList.toggle("active");
      });
    
      
      for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener("click", function () {
          navbar.classList.remove("active");
          navbarToggler.classList.remove("active");
        });
      }
      
    }

*/