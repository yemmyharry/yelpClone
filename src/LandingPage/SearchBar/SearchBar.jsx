import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  const submit = (e) => {
    if(typeof props.search === "function"){
      props.search(term, location)
    }
    console.log(term, location);
    e.preventDefault();
  };
  const smallSize = props.small ? "" : "is-medium";
  if (props.changeNav) {
    return (
      <form onSubmit={submit}>
        <div className={`field has-addons ${styles.shadow}`}>
          <p className="control">
            <input
              onChange={(e) => setTerm(e.target.value)}
              className={`input ${smallSize}`}
              type="text"
              placeholder="plumbers, delivery, takeout..."
              value={term}
            ></input>
          </p>
          <p className="control">
            <input
              onChange={(e) => setLocation(e.target.value)}
              className={`input ${smallSize}`}
              type="text"
              placeholder="San Francisco, CA"
              value={location}
            ></input>
          </p>
          <p className="control">
            <button
              onSubmit={submit}
              className={`button ${smallSize} ${styles["search-button"]}`}
            >
              <span className={`icon ${styles["search-icon"]}`}>
                <i className="fas fa-search"></i>
              </span>
            </button>
          </p>
        </div>
      </form>
    );
  } else {
    return (
      <form onSubmit={submit}>
        <div className="field has-addons">
          <p className="control">
            <a className={`button is-static ${smallSize}`}>
              <strong>Find</strong>
            </a>
          </p>
          <p className="control">
            <input
              onChange={(e) => setTerm(e.target.value)}
              className={`input ${smallSize}`}
              type="text"
              placeholder="plumbers, delivery, takeout..."
              value={term}
            ></input>
          </p>
          <p className="control">
            <a className={`button is-static ${smallSize}`}>
              <strong>Near</strong>
            </a>
          </p>
          <p className="control">
            <input
              onChange={(e) => setLocation(e.target.value)}
              className={`input ${smallSize}`}
              type="text"
              placeholder="San Francisco, CA"
              value={location}
            ></input>
          </p>
          <p className="control">
            <button
              onSubmit={submit}
              className={`button ${smallSize} ${styles["search-button"]}`}
            >
              <span className={`icon ${styles["search-icon"]}`}>
                <i className="fas fa-search"></i>
              </span>
            </button>
          </p>
        </div>
      </form>
    );
  }
}
