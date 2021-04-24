import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import styles from "../NavBar/NavBar.module.css";
import SearchQueries from "./SearchQuery/SearchQueries";
import SearchResults from "../Search/SearchResults/SearchResults"
import { useLocation, useHistory } from "react-router-dom"
import {useBusinessSearch} from '../config/useBusinessSearch'

export default function Search() {
  const history = useHistory()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const term = params.get('find_desc')
  const locationParam = params.get('find_loc')
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam)

  function search(term, location){
    //in this custom hook, we are using an object here bcos it can only accept one parameter so using an object helps us input 2 parameters
    setSearchParams({term, location})
    // const urlEncodedTerm = encodeURI(term)
    // const urlEncodedLocation = encodeURI(location)
    // history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`)
}
  return (
    <div>
      <div className={styles["nav-barry"]}>
        <NavBar term={term} location={locationParam} search={search} />
        <SubNav />
      </div>
      <SearchQueries term={searchParams.term} location={searchParams.location} shownResults={businesses ? businesses.length : 0} amountResults={amountResults} />
      <SearchResults businesses={businesses}  />
    </div>
  );
}
