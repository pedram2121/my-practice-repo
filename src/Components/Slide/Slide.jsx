import React from "react";
import styles from "./Slide.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../../../public/banner-1.jpg";
import two from "../../../public/banner-2.jpg";
import three from "../../../public/banner-3.jpg";


const Slide = ({ img, mainTitle, price, title }) => {
const Images = [one,two,three]
  return (
    <div className={styles.slideContainer}>
      <div className={styles.slideContent}>
        <h3 className={styles.slideTitle}>{title}</h3>
        <h2 className={styles.slideMaintitle}>{mainTitle}</h2>

        <h3 className={styles.slidePrice}>
          Starting at <b className={styles.priceBold}>{price}</b>.00
        </h3>

        <div className={styles.slideButton}>SHOP NOW</div>
      </div>

      <img
        src={img}
        className={styles.slideImage}
        width={1000}
        height={500}
        alt="banner"
      />
    </div>
  );
};

export default Slide;
