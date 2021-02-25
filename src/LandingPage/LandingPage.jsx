import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../assets/yelp.png";
import styles from "../LandingPage/LandingPage.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions";

function LandingPage() {
  return (
    <div className={styles.cover}>
      <div className={styles.container}>
        <div className={styles["search-area"]}>
          <TopNav />
          <span className={styles.container}>
            <img src={logo} alt="yelp-logo" className={styles.logo} />
          </span>
          <SearchBar />
          <SearchSuggestions />
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
