import React from "react";
import style from "../Nav/Navbar.module.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

function Navbar() {


  return (
    <Container>
      <div className={style.navbarHeder}>
        <ul className={style.ul}>
          <li>
            <Link to="/About">Contact us</Link>
          </li>
          <li>
            <Link to="/News">Store</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <div>
          <li className={style.sportLinkWrapper}>
            <Link to="/Sport" className={style.sportLink}>
              Cart
            </Link>
          </li>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
