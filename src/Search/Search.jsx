import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import styles from "../NavBar/NavBar.module.css";
import SearchQueries from "./SearchQuery/SearchQueries";
import SearchResults from "../Search/SearchResults/SearchResults"
import { useLocation } from "react-router-dom"
import {useBusinessSearch} from '../config/useBusinessSearch'

export default function Search() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const term = params.get('find_desc')
  const locationParam = params.get('find_loc')
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam)
  return (
    <div>
      <div className={styles["nav-barry"]}>
        <NavBar term={term} location={locationParam}/>
        <SubNav />
      </div>
      <SearchQueries term={term} location={locationParam}  />
      <SearchResults businesses={businesses} />
    </div>
  );
}
