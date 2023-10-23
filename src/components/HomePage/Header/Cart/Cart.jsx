import React from "react";
import styles from "./Cart.module.css";
import logo from "../../../../images/logo.jpg";
import search from "../../../../icons/search.svg";
import cart from "../../../../icons/cart.svg";
import { Badge, Button, IconButton } from "@mui/material";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const role = useSelector((state) => state.auth.role);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

   const handleLogoClick = () => {
       navigate("/")
   }

  const handleAdminButtonClick = () => {
    navigate("/admin");
  };

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const handleRedirectToBasket = () => {
      navigate("/basket")
  }

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <img src={search} alt="search" />
      </div>
      <img onClick={handleLogoClick} src={logo} alt="Left Arrow" className="rounded-full cursor-pointer" />
      {/* <div className={styles.cart}>
        <img src={cart} alt="search" />
      </div> */}
      <div className="flex justify-center items-center gap-2">
        {role === "ADMIN" && (
          <Button onClick={handleAdminButtonClick}>Админка</Button>
        )}
        {isAuthenticated ? (
          <Profile />
        ) : (
          <Button onClick={redirectToLoginPage}>Войти</Button>
        )}
        <div className={styles.cart}
        onClick={handleRedirectToBasket}
        >
          <Badge
            badgeContent={0}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="error"
          >
            <img src={cart} alt="search" />
          </Badge>
        </div>
      </div>
    </div>
  );
};
