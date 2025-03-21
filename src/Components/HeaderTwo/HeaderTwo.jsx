import React from "react";
import style from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useShopingContext } from "../../ShopingCartContext/Shopingcontext";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

function HeaderTwo() {
  const { productTotalQty } = useShopingContext();

  return (
    <Container>
      <div className={style.HeaderTwoo}>
        <Link to={"/"}>
          <div className={style.logo}> Logo </div>
        </Link>

        <div className={style.inputDiv}>
          <input
            className={style.inputBox}
            type="text"
            placeholder="Enter any Product Name..."
          />
          <BsSearch className={style.search} />
        </div>

        <div className={style.container}>
          <BiUser />
          <div className={style.iconwrapper}>
            <FiHeart />

            <div className={style.badge}>0</div>
          </div>

          <div>
            <Link to={"/cart/"}>
              <div className={style.iconwrapper}>
                <HiOutlineShoppingBag />
                <div className={style.ab}>{productTotalQty}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeaderTwo;
