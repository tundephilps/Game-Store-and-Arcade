import React from 'react'
import "./Featured.scss";
import {GrNotification} from "react-icons/gr"

const Featured = () => {
  return (
    
    <section class="section featured-game" id="featured" aria-label="featured game">
    <div class="container">

      <h1 class="h1 section-title">
        All Released <span class="span">Games</span>
      </h1>

      <ul class="has-scrollbar">

        <li className='scrollbar-item'>
          <div class="featured-game-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: 450}}>
              <img src="../../images/featured-game-1.jpg" width="100%" height="450" loading="lazy"
                alt="Just for Gamers" class="img-cover" />
            </figure>

            <div class="card-content">

              <h3 class="h3">
                <a href="#" class="card-title" tabindex="-1">
                  Just for <span class="span">Gamers</span>
                </a>
              </h3>

              <span class="card-meta">
                <GrNotification className='GrNotification' />

                <span class="span">Playstation 5, Xbox</span>
              </span>

            </div>

            <div class="card-content-overlay">

              <img src="../../images/featured-game-icon.png" loading="lazy" alt=""
                class="card-icon" />

              <h3 class="h3">
                <a href="#" class="card-title">
                  Just for <span class="span">Gamers</span>
                </a>
              </h3>

              <span class="card-meta">
              <GrNotification  className='GrNotification' />

                <span class="span">Playstation 5, Xbox</span>
              </span>

            </div>

          </div>
        </li>

        <li class="scrollbar-item">
          <div class="featured-game-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: 450}}>
              <img src="../../images/featured-game-2.jpg" width="100%" height="450" loading="lazy"
                alt="Need for Speed" class="img-cover" />
            </figure>

            <div class="card-content">

              <h3 class="h3">
                <a href="#" class="card-title" tabindex="-1">
                  Need for <span class="span">Speed</span>
                </a>
              </h3>

              <span class="card-meta">
                <GrNotification className='GrNotification' />

                <span class="span">Playstation 5, Xbox</span>
              </span>

            </div>

            <div class="card-content-overlay">

              <img src="../../images/featured-game-icon.png"  loading="lazy" alt=""
                class="card-icon" />

              <h3 class="h3">
                <a href="#" class="card-title">
                  Need for <span class="span">Speed</span>
                </a>
              </h3>

              <span class="card-meta">
              <GrNotification className='GrNotification' />

                <span class="span">Playstation 5, Xbox</span>
              </span>

            </div>

          </div>
        </li>

        <li class="scrollbar-item">
          <div class="featured-game-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: 450}}>
              <img src="../../images/featured-game-3.jpg" width="100%" height="450" loading="lazy"
                alt="Egypt Hunting Gamers" class="img-cover" />
            </figure>

            <div class="card-content">

              <h3 class="h3">
                <a href="#" class="card-title" tabindex="-1">
                  Egypt Hunting <span class="span">Gamers</span>
                </a>
              </h3>

              <span class="card-meta">
              <GrNotification  className='GrNotification' />

                <span class="span">Playstation 5, Xbox</span>
              </span>

            </div>

            <div class="card-content-overlay">

              <img src="../../images/featured-game-icon.png" loading="lazy" alt=""
                class="card-icon" />

              <h3 class="h3">
                <a href="#" class="card-title">
                  Egypt Hunting <span class="span">Gamers</span>
                </a>
              </h3>

              <span class="card-meta">
              <GrNotification className='GrNotification' />
                <span class="span">Playstation 5, Xbox</span>
              </span>

            </div>

          </div>
        </li>

        <li class="scrollbar-item">
          <div class="featured-game-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: 450}}>
              <img src="../../images/featured-game-4.jpg" width="100%" height="450" loading="lazy"
                alt="Just for Gamers" class="img-cover" />
            </figure>

            <div class="card-content">

              <h3 class="h3">
                <a href="#" class="card-title" tabindex="-1">
                  Just for <span class="span">Gamers</span>
                </a>
              </h3>

              <span class="card-meta">
              <GrNotification className='GrNotification' />

                <span class="span">Playstation 5, Xbox</span>
              </span>

            </div>

            <div class="card-content-overlay">

              <img src="../../images/featured-game-icon.png" loading="lazy" alt=""
                class="card-icon" />

              <h3 class="h3">
                <a href="#" class="card-title">
                  Just for <span class="span">Gamers</span>
                </a>
              </h3>

              <span class="card-meta">
              <GrNotification className='GrNotification' />

                <span class="span">Playstation 5, Xbox</span>
              </span>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>


  )
}

export default Featured;