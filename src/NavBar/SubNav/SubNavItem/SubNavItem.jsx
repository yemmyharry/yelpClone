import React from "react";
import styles from './SubNavItem.module.css'

export default function SubNav(props) {
  return (
    <div className={`dropdown is-hoverable ${styles['sub-nav']}`}>
      <div className="dropdown-trigger">
        <button
          className={`button ${styles.button}`}
          aria-haspopup="true"
          aria-controls="dropdown-menu4"
        >
          <span>{props.label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p>
              You can insert <strong>any type of content</strong> within the
              dropdown menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
