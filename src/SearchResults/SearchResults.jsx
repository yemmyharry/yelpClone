import React from 'react'
import NavBar from '../NavBar/NavBar'
import SubNav from '../NavBar/SubNav/SubNav'
import styles from '../NavBar/NavBar.module.css'

export default function SearchResults() {
    return (
        <div className={styles['nav-barry']}>
            <NavBar />
            <SubNav />
        </div>
    )
}
