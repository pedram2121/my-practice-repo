import React from "react";
import style from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

function HeaderTwo() {
  return (
    <div className={style.HeaderTwoo}>
      <div className={style.logo}> Logo </div>

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

        <div className={style.iconwrapper}>
          <HiOutlineShoppingBag />
          <div className={style.badge}>0</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo;
