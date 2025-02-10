import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import { getProduct } from "../../Services/api";
import Productcart from "../ProductCart/Productcart";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data);
    });
     getProduct();
  }, []);

  return (
    <> 
      <div className={style.gridContainer}>
            {products.map((item, index) => (
              <Productcart
                key={index}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                rating={item.rating || 0}
                sale={item.sale}
              />
            ))}
      </div>
    </>
  );
}

export default Product;
