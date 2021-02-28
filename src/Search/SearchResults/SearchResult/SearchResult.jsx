import React from "react";
import styles from "./SearchResult.module.css";
import BusinessRating from '../../../BusinessRating/BusinessRating'

export default function SearchResult() {
  return (
    <div className={styles['search-result']}>
        <img src="https://via.placeholder.com/210" alt="" className={styles['business-image']}/>
        <div className={styles['business-info']}>
            <h2 className="subtitle">Burger Place</h2>
          <BusinessRating />
        <p> $$$ <span className="tag">Burger</span> <span className="tag">Fries</span> </p>   
        </div>
        <div className={styles['contact-info']}>
            <p>+234575959404</p>
            <p>Openheimer strret</p>
            <p>12345 Berlin</p>
            
        </div>
       
    </div>

    // <div class="card">
    //   <div class="card-content">
    //     <div class="media">
    //       <div class="media-left">
    //         <figure class="image">
    //           <img
    //             src="https://via.placeholder.com/150"
    //             alt="Placeholder image"
    //           />
    //         </figure>
    //       </div>
    //       <div class="media-content">
    //         <p class="title is-4">John Smith</p>
    //         <p class="subtitle is-6">@johnsmith</p>
    //       </div>
    //     </div>

    //     <div class="content">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
    //       iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
    //       <a href="#">#responsive</a>
    //       <br />
    //       <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    //     </div>
    //   </div>
    // </div>
  );
}
