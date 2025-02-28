import React from "react";
import style from "./Header.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Container from "../Container/Container";

function Header() {
  return (
    <Container>
      <div className={style.HeaderTop}>
        <div className={style.HeaderTopFlex}>
          <div className={style.heder_top__icon_wrapper}>
            <div className={style.Gap}>
              <BsFacebook />
            </div>
            <div className={style.Gap}>
              <BsTwitter />
            </div>
            <div className={style.Gap}>
              <BsInstagram />
            </div>
          </div>

          <div className={style.text}>
            <b> FREE SHOPING </b> THIS WEEK ORDER OVER - 50$
          </div>

          <div className={style.SelectGap}>
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $"> USD $ </option>
              <option value="EUR $"> EUR $ </option>
              <option value="IRI $"> IRI $ </option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English"> English </option>
              <option value="Iran"> Iran </option>
            </select>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
