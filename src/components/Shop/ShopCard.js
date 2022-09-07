import React, { useState } from 'react'

import "./Shop.scss";
import { BsCart4 } from "react-icons/bs"

const ShopCard = ({ productItems, addToCart }) => {

    const FlashCard = ({ productItems, addToCart }) => {
        const [count, setCount] = useState(0)
        const increment = () => {
          setCount(count + 1)
        }}

  return (
    <>
  {productItems.map((productItems) => {
          return (
           
        <li class="scrollbar-item">
          <div class="shop-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: "70%"}}>
              <img src={productItems.cover} width="300" height="70%" loading="lazy"
                alt="Women Black T-Shirt" class="img-cover" />
            </figure>

            <div class="card-content">

              <a href="#" class="card-badge skewBg">{productItems.Category}</a>

              <h3 class="h3">
                <a href="#" class="card-title">{productItems.Product}</a>
              </h3>

              <div class="card-wrapper">
                <p class="card-price">{productItems.price}</p>

                <button class="card-btn" onClick={() => addToCart(productItems)} >
                  <BsCart4 />
                </button>
              </div>

            </div>

          </div>
        </li>
        )
    })}
  </>

  )
}

export default ShopCard