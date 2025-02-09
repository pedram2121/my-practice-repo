import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./Productcart.module.css";
import { Link } from "react-router-dom";

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

const Productcart = ({ img, name, price, rating, sale , id }) => {
  return (
    <Link to={`/product/${id}`} className={styles.productLink}>
      <div className={styles.productCard}>
        <div>
          <img className={styles.productImage} src={img} alt={name} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{name}</h2>
          {generatingRate(rating)}
          <del className={styles.dell}>${parseInt(price) + 50}.00</del>
          <p className={styles.price}>${price}.00</p>
          {sale && <span className={styles.sale}>Buy Now</span>}
        </div>
      </div>
    </Link>
  );
};

export default Productcart;
