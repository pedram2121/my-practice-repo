import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import styles from "./ProductDetail.module.css";
import { useShopingContext } from "../../Components/ShopingCartContex/Shopingcontext";


function ProductDetails() {

  const { handelIncrease, ProductQty } = useShopingContext();
  

  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8001/products/${id}`);
      const data = await res.json();
      setProductData(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.container}>
      {/* مسیر نمایش موقعیت کاربر */}
      <div className={styles.breadcrumb}>
        <a href="/">Home</a> <span> / </span>
        <span>{productData?.name}</span>
      </div>

      <div className={styles.productWrapper}>
        {/* تصویر محصول */}
        <div className={styles.imageContainer}>
          <img src={productData?.img} alt={productData?.name} />
        </div>

        {/* اطلاعات محصول */}
        <div className={styles.info}>
          <div className={styles.rating}>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <span className={styles.reviewText}> (8 نظر مشتری) </span>
          </div>

          <h2 className={styles.title}>{productData?.name}</h2>
          <p className={styles.price}>${productData?.price}.00</p>
          <p className={styles.description}>
            A product description is a piece of marketing copywriting that tells
            people what a product is and why it’s worth buying. Beyond a list of
            product details or features, a good product description tells a
            story about what makes that product special, with the goal of
            persuading customers to make a purchase A product description is a
            piece of marketing copywriting that tells people what a product is
            and why it’s worth buying. Beyond a list of product details or
            features, a good product description tells a story about what makes
            that product special, with the goal of persuading customers to make
            a purchase.
          </p>
          <p className={styles.stock}>20 Quantity in stock</p>

          <div className={styles.fleex}>
            <div>
              <button
                onClick={() => handelIncrease(id)}
                className={styles.addToCart}
              >
                +
              </button>
            </div>
            <span>{ProductQty(id)}</span>
            <div>
              <button className={styles.addToCart1}>-</button>
            </div>
          </div>

          <div className={styles.actions}>
            <span>
              <AiOutlineHeart /> Add to wishlist
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
