import React from "react";
import logo from "../assets/yelp.png";
import SearchBar from "../LandingPage/SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";


export default function NavBar(props) {


  return (
    // <div className={`${styles['nav-bar']}`}>
    <div className={`${styles.contain}`}>
      <Link to="/">
        <img src={logo} alt="yelp-logo" className={styles.logo}  />
      </Link>

      <SearchBar small changeNav term={props.term} location={props.location} search={props.search}/>
      <button className={`button ${styles["nav-b4btn"]} ${styles["asc"]}`}>
        For Businesses
      </button>
      <button className={`button ${styles["nav-b4btn"]} ${styles["asc"]}`}>
        Write a Review
      </button>
      <button className={`button ${styles["nav-button"]}`}>Login</button>
      <button className={`button is-danger ${styles["nav-button"]}`}>
        Register
      </button>
    </div>

    // </div>
  );
}
