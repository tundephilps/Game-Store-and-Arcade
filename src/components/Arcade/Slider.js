import React from "react"
import GameSlide from "./GameSlide"
import "./Arcade.scss"
//import SlideCard from "./SlideCard"

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <GameSlide />
        </div>
      </section>
    </>
  )
}

export default SliderHome