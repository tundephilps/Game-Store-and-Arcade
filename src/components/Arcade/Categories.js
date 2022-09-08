import React from "react"
import "./Arcade.scss"

const Categories = () => {
  const data = [
    {
      cateImg: "../images/tetris.png",
      cateName: "Tetris",
    },
    {
      cateImg: "../images/snake.jpg",
      cateName: "Snake and Ladder",
    },
    {
      cateImg: "../images/memory.webp",
      cateName: "Memory Cards",
    },
    {
      cateImg: "../images/megaman.webp",
      cateName: "Mega Man",
    },
    {
      cateImg: "../images/casino.png",
      cateName: "Casino",
    },
    {
      cateImg: "../images/breakout.png",
      cateName: "Break Out",
    },
    
    {
        cateImg: "../images/candy.png",
        cateName: "Candy Crush",
      },
      
    {
        cateImg: "../images/hangman.jpg",
        cateName: "Hang Man",
      },
      
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories