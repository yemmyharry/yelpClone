import React from 'react';
import styles from "../TopNav/TopNav.module.css";

 function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
             <span>Write a review </span>
             <span>Events </span>   
             <span>Talk </span>
            </div>
            <div className={styles.right}>
                <span> Login </span>
                <button className="button is-primary"> Sign Up</button>
            </div>
        </div>
    )
}

export default TopNav