import React from 'react'
import Blog from '../Blog/Blog'
import Featured from '../Featured/Featured'
import Newsletter from '../Footer/Newsletter'
import Hero from '../Hero/Hero'
import Mask from '../Mask/Mask'
import Release from '../Releases/Release'
import Shop from '../Shop/Shop'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Cart from '../Cart/Cart'


const Home = ({ productItems, cartItem, addToCart }) => {
  return (
    <div>

            <Hero />
            <Mask />
            <Release />
            <Featured />
            <Shop productItems={productItems} cartItem={cartItem} addToCart={addToCart} />
            <Blog />
            <Newsletter />
            

    </div>
  )
}

export default Home