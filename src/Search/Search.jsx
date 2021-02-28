import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import styles from "../NavBar/NavBar.module.css";
import SearchQueries from "./SearchQuery/SearchQueries";
import SearchResults from "../Search/SearchResults/SearchResults"

export default function Search() {
  return (
    <div>
      <div className={styles["nav-barry"]}>
        <NavBar />
        <SubNav />
      </div>
      <SearchQueries />
      <SearchResults />
    </div>
  );
}
