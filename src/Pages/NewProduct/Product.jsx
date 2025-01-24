import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import { getProduct } from "../../Components/Services/api";
import Productcart from "../ProductCart/Productcart";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
    <div className={style.MMM} >
   <div className={style.GGG}> 
      </div>
      <div className={style.PPP}>
        <div className={style.gridContainer}>
          {products.map((item, index) => (
            <Productcart
              key={index}
              img={item.img}
              name={item.name}
              category={item.category}
              price={item.price}
              rating={item.rating || 0}
              sale={item.sale}
            />
          ))}
        </div>
      </div>
    </div>


   
    </>
  );
}

export default Product;
