import React, { useState } from "react";
import style from "../Nav/Navbar.module.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { useShopingContext } from "../../ShopingCartContext/Shopingcontext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container>
      <div className={style.navbarHeder}>
        <div className={style.hamburger} onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`${style.ul} ${menuOpen ? style.showMenu : ""}`}>
          <li>
            <Link to="/men">MEN'S</Link>
          </li>

          <li>
            <Link to="/women">WOMEN'S</Link>
          </li>

          <li>
            <Link to="/contact">ContactUs</Link>
          </li>

          <li>
            <Link to="/store">Store</Link>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <div className={style.re}>
          <li className={style.sportLinkWrapper}>
            <Link to="/cart" className={style.sportLink}>
              Cart
            </Link>
          </li>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
