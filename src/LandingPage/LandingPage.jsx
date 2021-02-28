import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../assets/yelp.png";
import styles from "../LandingPage/LandingPage.module.css";
import SearchBar from "./SearchBar/SearchBar";
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions";
// import useReactRouter from 'use-react-router';
import { useHistory } from "react-router-dom";

function LandingPage() {
  // const {history} = useReactRouter();
  const history = useHistory();

  function search(term, location){
      const urlEncodedTerm = encodeURI(term)
      const urlEncodedLocation = encodeURI(location)
      history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`)
  }

  return (
    <div className={styles.cover}>
      <div className={styles.container}>
        <div className={styles["search-area"]}>
          <TopNav />
          <span className={styles.container}>
            <img src={logo} alt="yelp-logo" className={styles.logo} />
          </span>
          <SearchBar search={search}/>
          <SearchSuggestions />
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
