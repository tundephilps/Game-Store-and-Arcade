import React from 'react'
import "./Newsletter.scss";
import { AiOutlineMail } from "react-icons/ai";
import { GiPaperPlane } from "react-icons/gi";


const Newsletter = () => {
  return (
    
    <section class="newsletter" aria-label="newsletter">
    <div class="container">

      <div class="newsletter-card">

        <h2 class="h2">
          Our <span class="span">Newsletter</span>
        </h2>

        <form action="" class="newsletter-form">

          <div class="input-wrapper skewBg">
          
            <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required
              class="email-field" />
            <AiOutlineMail id='mailicon' />
            
          </div>

          <button type="submit" class="btn newsletter-btn skewBg">
            <span class="span" id='sub'>Subscribe <GiPaperPlane /> </span>

          </button>

        </form>

      </div>

    </div>
  </section>



  )
}

export default Newsletter