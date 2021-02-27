import React from "react";
import styles from "./SearchResultsSummary.module.css";

export default function SearchResultsSummary() {
  return (
    <div className={styles.container}>
      <div className={styles["search-summary"]}>
        <h1 className="subtitle">
          <strong>Best Burgers in Germany</strong>
        </h1>
        <p>Showing 6 out of 797 results</p>
      </div>
      <div className={styles.filters}>
        <button className={`button is-small`}>
          <span className={`icon`}>
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>Filters</span>
        </button>
        <div class="buttons has-addons are-small">
            <button class="button">$</button>
            <button class="button">$$</button>
            <button class="button">$$$</button>
            <button class="button">$$$$</button>
          </div>
        <button className={`button is-small`}>
          <span className={`icon`}>
            <i className="fas fa-clock"></i>
          </span>
          <span>Open Now</span>
        </button>
        <button className={`button is-small`}>
          <span className={`icon`}>
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span>Cashback</span>
        </button>
      </div>
    </div>
  );
}
