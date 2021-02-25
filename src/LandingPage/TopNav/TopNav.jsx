import React from "react";
import styles from "../TopNav/TopNav.module.css";

function TopNav() {
  return (
    
      <div className={styles["top-nav"]}>
        <div className={styles.left}>
          <a className={styles.clicky}>Write a review </a>
          <a className={styles.clicky}>Events </a>
          <a className={styles.clicky}>Talk </a>
        </div>
        <div className={styles.right}>
          <a className={styles.clicky}> Login </a>
          <button className="button is-light"> Sign Up</button>
        </div>
      </div>
    

    // <nav className="navbar" role="navigation" aria-label="main navigation">
    //   <div className="navbar-brand">
    //     <a
    //       role="button"
    //       className="navbar-burger"
    //       aria-label="menu"
    //       aria-expanded="false"
    //       data-target="navbarBasicExample"
    //     >
    //       <a className={styles.clicky} aria-hidden="true"></a className={styles.clicky}>
    //       <a className={styles.clicky} aria-hidden="true"></a className={styles.clicky}>
    //       <a className={styles.clicky} aria-hidden="true"></a className={styles.clicky}>
    //     </a>
    //   </div>
      
    //     <div id="navbarBasicExample" className="navbar-menu ">
    //       <div className="navbar-start">
    //         <a className="navbar-item">Home</a>

    //         <a className="navbar-item">Documentation</a>
    //       </div>
    //       <div className="navbar-end">
    //         <div className="navbar-item">
    //           <div className="buttons">
    //             <a className="button is-primary">
    //               <strong>Sign up</strong>
    //             </a>
    //             <a className="button is-light">Log in</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
      
    // </nav>
  );
}

export default TopNav;
