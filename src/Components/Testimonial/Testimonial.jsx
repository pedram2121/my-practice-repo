import React from "react";
import Container from "../Container/Container";
import styles from "./Testimonial.module.css";

function Testimonial() {
  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.grid}>
          {/* First Card */}
          <div className={styles.card}>
            <img
              className={`${styles.avatar} ${styles.inlineBlock}`}
              src="/user.jpg"
              width="80"
              height="80"
              alt="dp"
            />
            <h2 className={styles.name}>Salar</h2>
            <p className={styles.role}>CEO & Founder Invision</p>
            <img
              className={`${styles.quoteIcon}`}
              src="/quotes.jpg"
              width="280"
              height="180"
              alt="quotes"
            />
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
            </p>
          </div>

          {/* Second Card - Banner Container */}
          <div className={styles.bannerContainer}>
            <div className={styles.cardLarge}>
              <button className={styles.discountButton}>25% DISCOUNT</button>
              <h2 className={styles.collectionTitle}>Summer Collection</h2>
              <p className={styles.priceText}>
                Starting @ $20 <b>Shop Now</b>
              </p>
            </div>
          </div>



        </div>
      </div>
    </Container>
  );
}

export default Testimonial;
