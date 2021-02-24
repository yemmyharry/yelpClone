import React from "react";
import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div>
      <div className="field has-addons is-flex is-justify-content-center">
        <p className="control">
          <a className="button is-static is-medium">
            <strong>Find</strong>
          </a>
        </p>
        <p className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="plumbers, delivery, takeout..."
          ></input>
        </p>
        <p className="control">
          <a className="button is-static is-medium">
            <strong>Near</strong>
          </a>
        </p>
        <p className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="San Francisco, CA"
          ></input>
        </p>
        <p className="control">
          <button className={`button is-medium ${styles['search-button']}`}>
            <span className="icon">
              <i className="fas fa-search"></i>
            </span>
          </button>
        </p>
      </div>
    </div>
  );
}
