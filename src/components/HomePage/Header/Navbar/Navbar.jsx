import React from "react";
import Menu from "./Menu";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={`group ${styles.navbar}`}>
        <div className=" h-full w-full flex justify-between items-center text-center">
          <a href="/catalog?brand=1" className=" px-4 py-2">
            <span>NIKE</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>Air Jordan</span>
          </a>
          <a href="/catalog?brand=2" className=" px-4 py-2">
            <span>Adidas Yeezy</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>New Balance</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>Crocs</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>Balen</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>Alexander McQueen</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>Rick Owens</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>Аксессуары</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>В наличии</span>
          </a>
          <a href="#" className=" px-4 py-2">
            <span>Акции</span>
          </a>
        </div>
        <div
          className={`${styles.drawerUnderMenu} group-hover:flex group-hover:flex-col group-hover:w-full  group-hover:z-10`}
        >
          <a href="#" className="flex px-4 py-2 hover:bg-gray-200">
            Test 1
          </a>
          <a href="#" className="flex px-4 py-2 hover:bg-gray-200">
            Test 2
          </a>
          <a href="#" className="flex px-4 py-2 hover:bg-gray-200">
            Test 3
          </a>
        </div>
      </div>
    </div>
  );
};
