import React from "react";
import styles from "./SearchQueries.module.css";

export default function SearchQueries(props) {
  let resultStats = null;
  if (props.amountResults && props.shownResults) {
    resultStats = (
      <p>
        Showing 1-{props.shownResults} out of {props.amountResults} results
      </p>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles["search-summary"]}>
        <h1 className="subtitle">
          {props.term ? <strong>
            Best {props.term} in {props.location}
          </strong> : null}
          
        </h1>
        <p>{resultStats}</p>
      </div>
      <div className={styles.filters}>
        <button className={`button is-small`}>
          <span className={`icon`}>
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>Filters</span>
        </button>
        <div className="buttons has-addons are-small">
          <button className="button">$</button>
          <button className="button">$$</button>
          <button className="button">$$$</button>
          <button className="button">$$$$</button>
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
