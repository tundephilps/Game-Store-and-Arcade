import React from 'react';
import { ImLocation2, ImMail } from "react-icons/im";
import { IoIosHeadset } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaCartPlus, FaSearch } from "react-icons/fa";
import { GiPaperPlane } from "react-icons/gi";

import "./Footer.scss"

const Footer = () => {
  return (
    
  <footer class="footer">

  <div class="footer-top">
    <div class="container">

      <div class="footer-brand">

        <a href="#" class="logo">Optimum</a>

        <p class="footer-text">
          Optimum marketplace the relase etras thats sheets continig passag.
        </p>

        <ul class="contact-list">

          <li class="contact-item">
            <div class="contact-icon">
              <ImLocation2 />
            </div>

            <address class="item-text">
              Address : PO Box W75 Street lan West new queens
            </address>
          </li>

          <li class="contact-item">
            <div class="contact-icon">
            <IoIosHeadset />
            </div>

            <a href="tel:+241245654235" class="item-text">Phone : +24 1245 654 235</a>
          </li>

          <li class="contact-item">
            <div class="contact-icon">
              <ImMail />
            </div>

            <a href="mailto:info@exemple.com" class="item-text">Email : info@exemple.com</a>
          </li>

        </ul>

      </div>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title">Products</p>
        </li>

        <li>
          <a href="#" class="footer-link">Graphics (26)</a>
        </li>

        <li>
          <a href="#" class="footer-link">Backgrounds (11)</a>
        </li>

        <li>
          <a href="#" class="footer-link">Fonts (9)</a>
        </li>

        <li>
          <a href="#" class="footer-link">Music (3)</a>
        </li>

        <li>
          <a href="#" class="footer-link">Photography (3)</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title">Need Help?</p>
        </li>

        <li>
          <a href="#" class="footer-link">Terms & Conditions</a>
        </li>

        <li>
          <a href="#" class="footer-link">Privacy Policy</a>
        </li>

        <li>
          <a href="#" class="footer-link">Refund Policy</a>
        </li>

        <li>
          <a href="#" class="footer-link">Affiliate</a>
        </li>

        <li>
          <a href="#" class="footer-link">Use Cases</a>
        </li>

      </ul>

      <div class="footer-wrapper">

        <div class="social-wrapper">

          <p class="footer-list-title">Follow Us</p>

          <ul class="social-list">

            <li className='linkrow'>
              <a href="#" class="social-link" style={{backgroundColor: "#3b5998"}}>
                <FaFacebook  style={{fontSize: "2rem"}}  />
              </a>
            </li>

            <li>
              <a href="#" class="social-link" style={{backgroundColor: "#55acee"}}>
                <FaTwitter style={{fontSize: "2rem"}}  />
              </a>
            </li>

            <li>
              <a href="#" class="social-link" style={{backgroundColor: "#d71e18"}}>
                <FaPinterest style={{fontSize: "2rem"}}  />
              </a>
            </li>

            <li>
              <a href="#" class="social-link" style={{backgroundColor: "#1565c0"}}>
                <FaLinkedin  style={{fontSize: "2rem"}} />
              </a>
            </li>

          </ul>

        </div>

        <div class="footer-newsletter">

          <p class="footer-list-title">Newsletter Sign Up</p>

          <form action="" class="footer-newsletter">
            <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required
              class="email-field" />

            <button type="submit" class="footer-btn" aria-label="submit">
              <GiPaperPlane style={{fontSize: "1.8rem"}} />
            </button>
          </form>

        </div>

      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">

      <p class="copyright">
        &copy; 2022 Gamics. All Right Reserved by <a href="#" class="copyright-link">TundePhilps</a>
      </p>

      <img src="../../images/footer-bottom-img.png" width="340" height="21" loading="lazy" alt=""
        class="footer-bottom-img" />

    </div>
  </div>

</footer>


  )
}

export default Footer;