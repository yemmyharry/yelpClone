import React from 'react'
import logo from '../assets/yelp.png'
import SearchBar from '../LandingPage/SearchBar/SearchBar'
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <img src={logo} alt="yelp-logo" className={styles.logo}></img>
            <SearchBar />
            <button className={`button ${styles['nav-button']}`}>Login</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    )
}
