import React from 'react'
import TopNav from './TopNav/TopNav'
import logo from '../assets/yelp.png'
import styles from '../LandingPage/LandingPage.module.css'
import SearchBar from '../SearchBar/SearchBar'

function LandingPage() {
    return (
        <div>
            <TopNav />
            <span className={styles.container}>
               <img src={logo} alt="yelp-logo" className={styles.logo}/> 
            </span>
            <SearchBar />
            

        </div>
    )
}
export default LandingPage