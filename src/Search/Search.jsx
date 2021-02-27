import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import styles from "../NavBar/NavBar.module.css";
import SearchQueries from "./SearchQuery/SearchQueries";

export default function SearchResults() {
  return (
    <div>
      <div className={styles["nav-barry"]}>
        <NavBar />
        <SubNav />
      </div>
      <SearchQueries />
    </div>
  );
}
