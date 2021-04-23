import React from "react";
import styles from "./SearchResult.module.css";
import BusinessRating from '../../../BusinessRating/BusinessRating'

export default function SearchResult(props) {
  if(!props.business){
    return null
  }

  const tags = props.business.categories.map(category=><span className={`tag ${styles['business-tag']}`} key={category.alias}>{category.title}</span>)
  const addressLines = props.business.location.display_address.map(addressLine => <p key={props.business.id}>{addressLine}</p>)

  return (
    <div className={styles['search-result']}>
        <img src={props.business.image_url} alt="" className={styles['business-image']}/>
        <div className={styles['business-info']}>
            <h2 className="subtitle">{props.business.name}</h2>
          <BusinessRating reviewCount={props.business.review_count} rating={props.business.rating}  />
        <p> {props.business.price} {tags} </p>   
        </div>
        <div className={styles['contact-info']}>
            <p>{props.business.phone}</p>
           <p>{addressLines}</p>
            
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


// import React from 'react';
// import styles from './SearchResult.module.css';
// import  BusinessRating  from '../../../BusinessRating/BusinessRating';

// export default function SearchResult(props) {
//     const b = props.business;
//     if (!b) {
//         return (<div/>);
//     }

//     const tags = b.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={b.id + category.title}>{category.title}</span>));
//     const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);

//     return (
//         <div className={styles['search-result']}>
//             <img src={b.image_url} alt='business' className={styles['business-image']}/>
//             <div className={styles['business-info']}>
//                 <h2 className="subtitle">{b.name}</h2>
//                 <BusinessRating reviewCount={b.review_count} rating={b.rating}/>
//                 <p>{b.price} {tags}</p>
//             </div>
//             <div className={styles['contact-info']}>
//                 <p>{b.phone}</p>
//                 {addressLines}
//             </div>
//         </div>
//     )
// }