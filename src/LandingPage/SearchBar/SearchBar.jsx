import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const smallSize = props.small ? "" : "is-medium";
  if(props.changeNav){
    return (
      <div>
      <div className="field has-addons">
        <p className="control">
          <input
            className={`input ${smallSize}`}
            type="text"
            placeholder="plumbers, delivery, takeout..."
          ></input>
        </p>
        <p className="control">
          <input
            className={`input ${smallSize}`}
            type="text"
            placeholder="San Francisco, CA"
          ></input>
        </p>
        <p className="control">
          <button className={`button ${smallSize} ${styles["search-button"]}`}>
            <span className={`icon ${styles["search-icon"]}`}>
              <i className="fas fa-search"></i>
            </span>
          </button>
        </p>
      </div>
    </div>
    )
  } else {

  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <a className={`button is-static ${smallSize}`}>
            <strong>Find</strong>
          </a>
        </p>
        <p className="control">
          <input
            className={`input ${smallSize}`}
            type="text"
            placeholder="plumbers, delivery, takeout..."
          ></input>
        </p>
        <p className="control">
          <a className={`button is-static ${smallSize}`}>
            <strong>Near</strong>
          </a>
        </p>
        <p className="control">
          <input
            className={`input ${smallSize}`}
            type="text"
            placeholder="San Francisco, CA"
          ></input>
        </p>
        <p className="control">
          <button className={`button ${smallSize} ${styles["search-button"]}`}>
            <span className={`icon ${styles["search-icon"]}`}>
              <i className="fas fa-search"></i>
            </span>
          </button>
        </p>
      </div>
    </div>
  );
  }
}
