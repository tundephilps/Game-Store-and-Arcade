import React, { useState } from 'react'
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import "./App.css"
import "./Index.css"
import "./Styles.scss"
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Arcade from './components/Arcade/Arcade';
import ShopData from './components/Shop/ShopData';
import Cart from './components/Cart/Cart';

function App () {



const { productItems } = ShopData

const [cartItem, setCartItem] = useState([])

const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = cartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }
  


    return (
        
            <div>
            <Router>
            
            <Header cartItem={cartItem} />
            <Routes>
            <Route path="/" element={<Home productItems={productItems} addToCart={addToCart}  />} />
            <Route path="/Cart" element={<Cart cartItem={cartItem} addToCart={addToCart} />} />
            
            <Route path="/" element={<Arcade />} />
           
            </Routes>
            
            <Footer />
            
            </Router>
            </div>
    );
}


export default App;