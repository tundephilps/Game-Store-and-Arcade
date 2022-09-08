import React from 'react'
import Categories from "./Categories"
import "./Arcade.scss"
import SliderHome from "./Slider"

const Arcade = () => {


    return (
    
    <>
      <section className='home' id='Game'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Arcade;
