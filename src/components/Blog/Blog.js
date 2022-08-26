import React from 'react';
import "./Blog.scss";
import { AiOutlineCaretRight, AiFillCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";


const Blog = () => {
  return (
    
    <section class="section blog" id="blog" aria-label="blog">
    <div class="container">

      <h2 class="h2 section-title">
        Latest News & <span class="span">Articles</span>
      </h2>

      <p class="section-text">
        Compete With 100 Players On A Remote Island For Winner Takes Showdown Known Issue Where Certain Skin
        Strategic
      </p>

      <ul className="blog-list items-center justify-center">

        <li>
          <div class="blog-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: 290}}>
              <img src="../../images/blog-1.jpg" width="100%" height="290" loading="lazy"
                alt="Shooter Action Video" class="img-cover" />
            </figure>

            <div class="card-content">

              <ul class="card-meta-list">

                <li class="card-meta-item">
                <BsFillPersonFill />

                  <a href="#" class="item-text">Admin</a>
                </li>

                <li class="card-meta-item">
                <AiFillCalendar />

                  <time datetime="2022-09-19" class="item-text">September 19, 2022</time>
                </li>

              </ul>

              <h3>
                <a href="#" class="card-title">Shooter Action Video</a>
              </h3>

              <p class="card-text">
                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
              </p>

              <a href="#" class="card-link">
                <span class="span">Read More</span>

                <AiOutlineCaretRight />

              </a>

            </div>

          </div>
        </li>

        <li>
          <div class="blog-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: 290}}>
              <img src="../../images/blog-2.jpg" width="100%" height="290" loading="lazy" alt="The Walking Dead"
                class="img-cover" />
            </figure>

            <div class="card-content">

              <ul class="card-meta-list">

                <li class="card-meta-item">
                <BsFillPersonFill />

                  <a href="#" class="item-text">Admin</a>
                </li>

                <li class="card-meta-item">
                <AiFillCalendar />

                  <time datetime="2022-09-19" class="item-text">September 19, 2022</time>
                </li>

              </ul>

              <h3>
                <a href="#" class="card-title">The Walking Dead</a>
              </h3>

              <p class="card-text">
                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
              </p>

              <a href="#" class="card-link">
                <span class="span">Read More</span>

                <AiOutlineCaretRight />

              </a>

            </div>

          </div>
        </li>

        <li>
          <div class="blog-card">

            <figure class="card-banner img-holder" style={{width: "100%", height: 290}}>
              <img src="../../images/blog-3.jpg" width="100%" height="290" loading="lazy"
                alt="Defense Of The Ancients" class="img-cover" />
            </figure>

            <div class="card-content">

              <ul class="card-meta-list">

                <li class="card-meta-item">
                <BsFillPersonFill />

                  <a href="#" class="item-text">Admin</a>
                </li>

                <li class="card-meta-item">
                <AiFillCalendar />

                  <time datetime="2022-09-19" class="item-text">September 19, 2022</time>
                </li>

              </ul>

              <h3>
                <a href="#" class="card-title">Defense Of The Ancients</a>
              </h3>

              <p class="card-text">
                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
              </p>

              <a href="#" class="card-link">
                <span class="span">Read More</span>

                <AiOutlineCaretRight />

              </a>

            </div>

          </div>
        </li>





      </ul>
      </div>

    
  </section>


  )
}

export default Blog;