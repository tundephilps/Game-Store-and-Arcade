import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <section class="section hero" id="home" aria-label="home">
        <div class="container">

          <div class="hero-content">

            <p className="hero-subtitle">World Gaming</p>

            <h1 className="h1 hero-title" >
              Create <span class="span">Manage</span> Matches
            </h1>

            <p class="hero-text">
              Find technology or people for digital projects in public sector and Find an individual specialist develope
              researcher.
            </p>

            <button class="btn skewBg" >Read More</button>

          </div>

          <figure class="hero-banner img-holder"
           style={{width: "700", height: "700"}}
           >
            <img src="./images/hero-banner.png" width="700" height="700" alt="hero banner" class="w-100" />
          </figure>

        </div>
      </section>

  )
}

export default Hero