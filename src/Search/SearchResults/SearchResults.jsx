import React from "react";
import SearchResult from '../SearchResults/SearchResult/SearchResult'
import styles from '../SearchResults/SearchResults.module.css'

export default function SearchResults(props) {
  const searchResults = props.businesses.map(business => <SearchResult key={business.id} business={business} />);

  if(!props.businesses && !props.businesses.length){
    return (<div>loading</div>)
  } else {
     return (
    <div className={styles['search-results']}>
     {searchResults}
    </div>
  );
  }

  

 
}
