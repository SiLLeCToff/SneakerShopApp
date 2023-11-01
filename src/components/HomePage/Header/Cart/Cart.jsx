 import React, {useEffect, useState} from "react";
import styles from "./Cart.module.css";
import logo from "../../../../images/logo.png";
import search from "../../../../icons/search.svg";
import cart from "../../../../icons/cart.svg";
import { Badge, Button, IconButton } from "@mui/material";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger.jsx";

export const Cart = ({open, handleClick}) => {
    const basket = useSelector((state)=> state.basket)
    const basketGuest =
        JSON.parse(localStorage.getItem("basket")) || [];
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


    useEffect(() => {

    }, [basketGuest, basket]);

  return (
    <div className={styles.main}>
      <div className={styles.search}>
          <div>
              <Hamburger open={open} handleClick={handleClick} />
          </div>
        <img src={search} alt="search" className="flex hover:bg-gray-100 hover:bg-opacity-80 rounded-md w-11 h-11 p-3 cursor-pointer" />
      </div>
        <div className="flex w-1/3 items-center justify-center">
            <img onClick={handleLogoClick} src={logo} alt="Left Arrow" className="w-[58px] h-[52px] object-cover  cursor-pointer" />
        </div>
      {/* <div className={styles.cart}>
        <img src={cart} alt="search" />
      </div> */}
      <div className="flex justify-end items-center w-1/3 gap-2">
        {role === "ADMIN" && (
          <button className="flex bg-white" onClick={handleAdminButtonClick}>Админка</button>
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
            badgeContent={isAuthenticated ? basket.length : basketGuest.length}
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
