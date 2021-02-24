import React from 'react'
import TopNav from './TopNav/TopNav'
import logo from '../assets/yelp.png'
import styles from '../LandingPage/LandingPage.module.css'

function LandingPage() {
    return (
        <div>
            <TopNav />
            <span className={styles.container}>
               <img src={logo} alt="yelp-logo" className={styles.logo}/> 
            </span>
            

        </div>
    )
}
export default LandingPage