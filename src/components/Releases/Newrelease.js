import React from 'react'
import "./Release.scss"


const Newrelease = () => {
  return (
    <section className='relative item-center text-center py-[30px] px-[50px] bg-black h-[110vh] bg-flower'>
            <div  className="flex flex-col items-center mt-[4rem] ">
                 <p className='inline-block text-3xl text-white font-secondary'>LATEST RELEASES</p>
                     <h2 className="text-white/75 text-5xl">
                      Create & <span className="text-thOrange">Manage</span>
                     </h2>
                      
            </div>
            <div className='grid-cols-1 lg:grid-cols-3 mt-[4rem]'>
           
            <ul className=' flex flex-1 flex-row gap-x-[8rem]  has-scrollbar'>

<li class="scrollbar-item">
  <div class="latest-game-card">

    <figure class="card-banner img-holder" style={{ height: 470}}>
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

    <figure class="card-banner img-holder" style={{ height: 470}}>
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

    <figure class="card-banner img-holder" style={{height: 470}}>
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

            
            
            
            
    </section>
  )
}

export default Newrelease

/**
 *  <div className="relative shadow-lg shadow-indigo-500/50 ">

<figure class="card-banner img-holder" style={{width: 400, height: 470}}>
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

 * 
 * 
 * 
  .latest-game .section-title { margin-block-end: 80px; }
  
  .latest-game .has-scrollbar {
    margin-inline: -15px;
    padding-inline: 15px;
    scroll-padding-inline-start: 15px;
  }
  
  .latest-game-card {
    position: relative;
    box-shadow: 0px 5px 10px 1px hsla(0, 0%, 0%, 0.4);
  }
  
  .latest-game-card .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsla(280, 37%, 8%, 0.9);
    padding: 35px 25px;
  }
  
  .latest-game-card .card-badge {
    position: absolute;
    bottom: 100%;
    left: 25px;
  }
  
  .latest-game-card .card-title {
    margin-block-end: 12px;
    transition:  0.25s ease;
  }
  
  .latest-game-card .card-title:is(:hover, :focus) { color: hsla(42, 99%, 46%, 0.75); }
  
  .latest-game-card .card-price {
    color: hsl(0, 0%, 78%);
    font-size:  1.3rem;
    font-weight: 600;
  }
  
  .latest-game-card .card-price .span { margin-inline-start: 5px; }
  
  
 * 
 * .section-subtitle,
  .section-title {
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }
section-wrapper-bg.png
  
  .section-subtitle {
    color: var(--silver);
    font-size: var(--fs-9);
    font-weight: var(--fw-700);
    margin-block-end: 10px;
  }
  
  .section-title::after {
    content: url("images/title-underline.png");
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
 *
 *  
 */