import React from 'react'
import "./Shop.scss";
import { BsCart4 } from "react-icons/bs"

const Shop = () => {
  return (
    
    <section class="section shop" id="shop" aria-label="shop">
    <div class="container">

      <h2 class="h2 section-title">
        Gaming Product <span class="span">Corner</span>
      </h2>

      <p class="section-text">
        Compete with 100 players on a remote island for winner takes showdown known issue where certain skin
        strategic
      </p>

      <ul class="has-scrollbar">

        <li class="scrollbar-item">
          <div class="shop-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: "70%"}}>
              <img src="../../images/shop-img-1.jpg" width="300" height="70%" loading="lazy"
                alt="Women Black T-Shirt" class="img-cover" />
            </figure>

            <div class="card-content">

              <a href="#" class="card-badge skewBg">t-shirt</a>

              <h3 class="h3">
                <a href="#" class="card-title">Women Black T-Shirt</a>
              </h3>

              <div class="card-wrapper">
                <p class="card-price">$29.00</p>

                <button class="card-btn">
                  <BsCart4 />
                </button>
              </div>

            </div>

          </div>
        </li>

        <li class="scrollbar-item">
          <div class="shop-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: "70%"}}>
              <img src="../../images/shop-img-2.jpg" width="100%" height="70%" loading="lazy"
                alt="Gears 5 Xbox Controller" class="img-cover" />
            </figure>

            <div class="card-content">

              <a href="#" class="card-badge skewBg">x-box</a>

              <h3 class="h3">
                <a href="#" class="card-title">Gears 5 Xbox Controller</a>
              </h3>

              <div class="card-wrapper">
                <p class="card-price">$29.00</p>

                <button class="card-btn">
                <BsCart4 />
                </button>
              </div>

            </div>

          </div>
        </li>

        <li class="scrollbar-item">
          <div class="shop-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: "70%"}}>
              <img src="../../images/shop-img-3.jpg" width="100%" height="70%" loading="lazy"
                alt="GeForce RTX 2070" class="img-cover" />
            </figure>

            <div class="card-content">

              <a href="#" class="card-badge skewBg">Graphics</a>

              <h3 class="h3">
                <a href="#" class="card-title">GeForce RTX 2070</a>
              </h3>

              <div class="card-wrapper">
                <p class="card-price">$29.00</p>

                <button class="card-btn">
                <BsCart4 />
                </button>
              </div>

            </div>

          </div>
        </li>

        <li class="scrollbar-item">
          <div class="shop-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: "70%"}}>
              <img src="../../images/shop-img-4.jpg" width="100%" height="70%" loading="lazy"
                alt="Virtual Reality Smiled" class="img-cover" />
            </figure>

            <div class="card-content">

              <a href="#" class="card-badge skewBg">VR-Box</a>

              <h3 class="h3">
                <a href="#" class="card-title">Virtual Reality Smiled</a>
              </h3>

              <div class="card-wrapper">
                <p class="card-price">$29.00</p>

                <button class="card-btn">
                <BsCart4 />
                </button>
              </div>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>


  )
}

export default Shop;