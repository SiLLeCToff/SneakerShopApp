import React, {useState} from "react";
import Menu from "./Menu";
import styles from "./Navbar.module.css";
import {useNavigate} from "react-router-dom";

export const Navbar = ({open}) => {
  const navigate = useNavigate()

  return (
<>
    <div className="w-full h-full flex justify-center items-center   xl:flex md:hidden max-sm:hidden sm:hidden">
      <div className={`group ${styles.navbar} `}>
        <div className=" h-full w-full flex justify-between items-center text-center">
          <a onClick={() => navigate('/catalog?brand=1')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
            <span >NIKE</span>
          </a>
          <a href="#" className=" xl:px-2 xl:py-2 md:px-1 md:py-2">
            <span>Air Jordan</span>
          </a>
          <a onClick={() => navigate('/catalog?brand=2')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
            <span>Adidas Yeezy</span>
          </a>
          <a href="#" className="xl:px-2 xl:py-2 md:px-1 md:py-2">
            <span>New Balance</span>
          </a>

          <a href="#" className="xl:px-2 xl:py-2 md:px-1 md:py-2">
            <span>Alexander McQueen</span>
          </a>
          <a href="#" className="xl:px-2 xl:py-2 md:px-1 md:py-2">
            <span>Rick Owens</span>
          </a>
          <a href="#" className="xl:px-2 xl:py-2 md:px-1 md:py-2">
            <span>Аксессуары</span>
          </a>
          <a href="#" className="xl:px-2 xl:py-2 md:px-1 md:py-2">
            <span>В наличии</span>
          </a>
          <a href="#" className="xl:px-2 xl:py-2 md:px-1 md:py-2 text-red-500">
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
<div className="xl:hidden">
  <div className={`fixed left-0 ${ open === true ? "translate-x-[0] duration-700" : "-translate-x-[400px] duration-700"} items-center mt-6 flex-col top-0 w-[300px] flex transition-all h-full z-20 bg-white pt-[100px] `}>
    <a onClick={() => navigate('/catalog?brand=1')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
      <span className="flex font-medium text-2xl" >NIKE</span>
    </a>
    <a onClick={() => navigate('/catalog?brand=1')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
      <span className="flex font-medium text-2xl" >ADIDAS</span>
    </a>
    <a onClick={() => navigate('/catalog?brand=1')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
      <span className="flex font-medium text-2xl" >NEW BALANCE</span>
    </a>
    <a onClick={() => navigate('/catalog?brand=1')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
      <span className="flex font-medium text-2xl" >REEBOOK</span>
    </a>
    <a onClick={() => navigate('/catalog?brand=1')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
      <span className="flex font-medium text-2xl" >PUMA</span>
    </a>
    <a onClick={() => navigate('/catalog?brand=1')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
      <span className="flex font-medium text-2xl text-red-500" >АКЦИИ</span>
    </a>
  </div>
</div>
</>

  );
};
