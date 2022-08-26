import React from 'react';
import "./Live.scss";
import { FaPlay } from "react-icons/fa"


const Live = () => {
  return (
   
    <section class=" live-match" id="live" aria-label="live match">
    <div class="container">

      <h2 class="h2 section-title">
        Watch Live <span class="span">Match</span>
      </h2>

      <figure class="live-match-banner img-holder ">

        <img src="../../images/live-match-banner.jpg" loading="lazy"
          alt="Live Match Video" class="img-cover" />

        <button class="play-btn" aria-label="play video">
         <FaPlay />
        </button>

      </figure>

      <div class="live-match-player">

        <figure class="player player-1 img-holder" 
        //style={{width: 800, height: 470}}
        >
          <img src="../../images/live-match-player-1.png" loading="lazy"
            alt="tokyo eagle" class="w-100" />
        </figure>

        <div class="live-match-detail">

          <p class="live-match-subtitle">Upcoming Live Matches</p>

          <time class="live-match-time" datetime="08:30">08:30</time>

        </div>

        <figure class="player player-2 img-holder" style={{width: 800, height: 470}}>
          <img src="../../images/live-match-player-2.png" width="400" height="305" loading="lazy"
            alt="new york hunter7" class="w-100" />
        </figure>

      </div>

    </div>

    
  </section>

  )
}

export default Live