import React from "react";
import SearchResult from '../SearchResults/SearchResult/SearchResult'
import styles from '../SearchResults/SearchResults.module.css'

export default function SearchResults() {
  return (
    <div className={styles['search-results']}>
      <SearchResult />
      <SearchResult />
    </div>
  );
}
