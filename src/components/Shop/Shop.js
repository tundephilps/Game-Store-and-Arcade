import React from 'react'
import "./Shop.scss";
import { BsCart4 } from "react-icons/bs"
import ShopCard from './ShopCard';

const Shop = ({ productItems, cartItem, addToCart }) => {
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
      <ShopCard productItems={productItems} addToCart={addToCart} />
      </ul>

    </div>
  </section>


  )
}

export default Shop;