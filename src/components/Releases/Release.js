import React from 'react'
import Live from '../Live/Live'
import "./Release.scss"

const Products = () => {
  return (
   

    <div class="section-wrapper">

   
    <section class="section latest-game" aria-label="latest game">
      <div class="container">

        <p class="section-subtitle">Latest Releases</p>

        <h2 class="h2 section-title">
          Create & <span class="span">Manage</span>
        </h2>

        <ul class="has-scrollbar">
        <div className='grid-cols-1 lg:grid-cols-3 mt-[4rem]'>
           
           <ul className=' flex flex-1 flex-row gap-x-[3rem]  has-scrollbar'>

<li class="scrollbar-item">
 <div class="latest-game-card">

   <figure class="card-banner img-holder" style={{ height: 600}}>
     <img src="../../images/latest-game-1.jpg" width="400" height="470" loading="lazy"
       alt="White Walker Daily" class="img-cover" />
   </figure>

   <div class="card-content">

     <a href="#" class="card-badge skewBg">Zombie</a>

     <h3 class="h3">
       <a href="#" class="card-title">White Walker <span class="span">Daily</span></a>
     </h3>

     <p class="card-price">
       Entry Fee : <span class="span">Free</span>
     </p>

   </div>

 </div>
</li>

<li class="scrollbar-item">
 <div class="latest-game-card">

   <figure class="card-banner img-holder" style={{ height: 600}}>
     <img src="../../images/latest-game-2.jpg" width="400" height="470" loading="lazy"
       alt="Hunter Killer II" class="img-cover" />
   </figure>

   <div class="card-content">

     <a href="#" class="card-badge skewBg">Adventure</a>

     <h3 class="h3">
       <a href="#" class="card-title">Hunter Killer <span class="span">II</span></a>
     </h3>

     <p class="card-price">
       Entry Fee : <span class="span">$25.00</span>
     </p>

   </div>

 </div>
</li>

<li class="scrollbar-item">
 <div class="latest-game-card">

   <figure class="card-banner img-holder" style={{height: 600 }}>
     <img src="../../images/latest-game-3.jpg" width="400" height="470" loading="lazy"
       alt="Cyberpunk Daily" class="img-cover" />
   </figure>

   <div class="card-content">

     <a href="#" class="card-badge skewBg">Action</a>

     <h3 class="h3">
       <a href="#" class="card-title">Cyberpunk <span class="span">Daily</span></a>
     </h3>

     <p class="card-price">
       Entry Fee : <span class="span">$25.00</span>
     </p>

   </div>

 </div>
</li>

</ul>



</div>


       
        </ul>

      </div>
    </section>
<div>
<Live />
</div>
</div>

  )
}

export default Products