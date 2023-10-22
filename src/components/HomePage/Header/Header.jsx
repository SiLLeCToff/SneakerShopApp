import React from "react";
import { Cart } from "./Cart/Cart";
import styles from "./Header.module.css";
import { Navbar } from "./Navbar/Navbar";
import { News } from "./News/News";

const Header = () => {
  return (
    <div className={styles.header}>
      <News />
      <Cart />
      <Navbar />
    </div>
  );
};

export default Header;
