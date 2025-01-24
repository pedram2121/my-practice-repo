import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./Productcart.module.css";

const generatingRate = (rating) => {
  switch (rating) {
    case 1:
      return (
        <div className={styles.rating}>
          <AiFillStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
        </div>
      );
    case 2:
      return (
        <div className={styles.rating}>
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
        </div>
      );
    case 3:
      return (
        <div className={styles.rating}>
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
        </div>
      );
    case 4:
      return (
        <div className={styles.rating}>
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiOutlineStar className={styles.star} />
        </div>
      );
    case 5:
      return (
        <div className={styles.rating}>
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
        </div>
      );
    default:
      return null;
  }
};

const Productcart = ({ img, name, category, price, rating, sale }) => {
  return (
    <div className={styles.productCard}>
      <div>
        <img className={styles.productImage} src={img} alt={name} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        {/* <p className={styles.categories}>
          {Array.isArray(category) ? category.join(", ") : "No category"}
        </p> */}
        {generatingRate(rating)}
        <del className={styles.dell}>${parseInt(price) + 50}.00</del>
        <p className={styles.price}>${price}.00</p>

        {sale && <span className={styles.sale}>Buy Now</span>}
      </div>
    </div>
  );
};

export default Productcart;
