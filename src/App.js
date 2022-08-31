import React from 'react'
import Blog from './components/Blog/Blog';
import Newsletter from './components/Footer/Newsletter';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Mask from './components/Mask/Mask';
import Release from './components/Releases/Release';
import Shop from './components/Shop/Shop';
import Footer from "./components/Footer/Footer"
import "./App.css"
import "./Index.css"
import "./Styles.scss"
import Newrelease from './components/Releases/Newrelease';
import Featured from './components/Featured/Featured';
import Nav from './components/Header/Drop.js';

function App () {
    return (
        
            <div>
            <Header />
            
            <Hero />
            <Mask />
            <Release />
            <Featured />
            <Shop />
            <Blog />
            <Newsletter />
            <Footer />
            </div>
    );
}


export default App;