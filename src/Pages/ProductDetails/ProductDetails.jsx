import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import styles from "./ProductDetail.module.css";
import { useShopingContext } from "../../ShopingCartContext/Shopingcontext";
import { detailsProduct } from "../../Services/api";
import Container from "../../Components/Container/Container";

function ProductDetails() {
  const { handelIncrease, productQty, handleDecrease, handelDeleteProduct } =
    useShopingContext();

  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await detailsProduct(id);
      console.log("Product Data:", data);
      setProductData(data.data);
    };
    fetchData();
  }, [id]);

  return (
    <Container>
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
              A product description is a piece of marketing copywriting that
              tells people what a product is and why it’s worth buying. Beyond a
              list of product details or features, a good product description
              tells a story about what makes that product special, with the goal
              of persuading customers to make a purchase A product description
              is a piece of marketing copywriting that tells people what a
              product is and why it’s worth buying. Beyond a list of product
              details or features, a good product description tells a story
              about what makes that product special, with the goal of persuading
              customers to make a purchase.
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
              <span>{productQty(id)}</span>
              <div>
                <button
                  onClick={() => handleDecrease(id)}
                  className={styles.addToCart1}
                >
                  -
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={() => handelDeleteProduct(id)}
                className={styles.RemoveToCart}
              >
                Remove From Cart
              </button>
            </div>

            <Link to="/cart/">
              <div>
                <button className={styles.ToCart}>Cart</button>
              </div>
            </Link>

            <div className={styles.actions}>
              <span>
                <AiOutlineHeart /> Add to wishlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
