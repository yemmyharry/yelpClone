import React from "react";
import styles from "./BusinessRating.module.css";
import Rating from "react-rating";

export default function BusinessRating() {
  return (
    <div className={styles.rating}>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={4}
      />
      <p> 700 Reviews </p>
    </div>
  );
}
