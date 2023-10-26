import React, {useState} from "react";
import { Cart } from "./Cart/Cart";
import styles from "./Header.module.css";
import { Navbar } from "./Navbar/Navbar";
import { News } from "./News/News";

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setOpen(!open)
    }
  return (
    <div className={styles.header}>
      <News />
      <Cart open={open} handleClick={handleClick}/>
      <Navbar open={open}/>
    </div>
  );
};

export default Header;
