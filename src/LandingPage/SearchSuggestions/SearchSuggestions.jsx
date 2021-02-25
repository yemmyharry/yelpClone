import React from "react";
import styles from './SearchSuggestions.module.css'

export default function SearchSuggestions() {
  return (

    <div className={styles.suggestions}>
      <span className="icon">
        <i className="fas fa-bath"></i>
      </span>
      <span className={styles.suggestion}>Plumbers</span>
      <span className="icon">
        <i className="fas fa-utensils"></i>
      </span>
      <span className={styles.suggestion}>Restaurants</span>
      <span className="icon">
        <i className="fas fa-home"></i>
      </span>
      <span className={styles.suggestion}>Home Services</span>
      <span className="icon">
        <i className="fas fa-motorcycle"></i>
      </span>
      <span className={styles.suggestion}>Delivery</span>
      <span className="icon">
        <i className="fas fa-warehouse"></i>
      </span>
      <span className={styles.suggestion}>Black Owned</span>
    </div>
  );
}
