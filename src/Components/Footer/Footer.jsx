import React from "react";
import styles from "./Footer.module.css";
import Container from "../Container/Container";

function Footer() {
  return (
    <Container>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p>&copy; Copyright Pedram-Sharifi | All Right Reserved.</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
