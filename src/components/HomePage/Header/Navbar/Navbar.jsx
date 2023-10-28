import React, {useEffect, useRef, useState} from "react";
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import {useNavigate} from "react-router-dom";

export const Navbar = ({open}) => {
  const navigate = useNavigate()
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(true);

  return (
<>
    <div className="w-full h-full flex justify-center items-center   xl:flex md:hidden max-sm:hidden sm:hidden">
      <div className={`${styles.navbar}`}>
        <div className="h-full w-full flex justify-between items-center text-center py-1"
             onMouseLeave={() => setIsSubMenuVisible(false)}>
          <Link to="/catalog" className={styles.menuItem}
                onMouseEnter={() => setIsSubMenuVisible(true)}>
            <span  className="xl:py-3 md:py-2 font-medium">Каталог</span>
          </Link>
          <Link to="/catalog" className={styles.menuItem}>
            <span  className="xl:py-3 md:py-2 font-medium">Новинки</span>
          </Link>
          <a href="#" className="xl:mx-2 md:mx-1">
            <span className="xl:py-2 md:py-2 font-medium">Аксессуары</span>
          </a>
          <a href="#" className="xl:mx-2 md:mx-1">
            <span className="xl:py-2 md:py-2 font-medium">В наличии</span>
          </a>
          <Link to="/catalog" className={styles.menuItem}>
            <span  className="xl:py-3 md:py-2 font-medium">О нас</span>
          </Link>
          <a href="#" className="xl:mx-2 md:mx-1 text-red-500">
            <span className="xl:py-2 md:py-2 font-medium">Акции</span>
          </a>
        </div>
        {isSubMenuVisible && (<div
            onMouseEnter={() => setIsSubMenuVisible(true)}
            onMouseLeave={() => setIsSubMenuVisible(false)}
          className={`${styles.drawerUnderMenu} xl:flex items-start justify-start h-[300px] gap-20 xl:w-full xl:z-10`}
        >
          <div className="flex flex-col items-start gap-1">
            <Link to="/catalog?brand=1" className="group xl:mx-2 md:mx-1">
              <p className="font-normal">NIKE</p>
            </Link>
            <Link to="/catalog?brand=1" className="group xl:mx-2 md:mx-1">
              <p className=" font-light">Jordan's</p>
            </Link>
            <Link to="/catalog?brand=1" className="group xl:mx-2 md:mx-1">
              <p className=" font-light">Air Max</p>
            </Link>
          </div>

          <div className="flex flex-col items-start gap-1">
            <Link to="/catalog?brand=2" className="group xl:mx-2 md:mx-1">
              <p className="font-normal">Adidas</p>
            </Link>
            <Link to="/catalog?brand=2" className="group xl:mx-2 md:mx-1">
              <p className=" font-light">Yeezy</p>
            </Link>
            <Link to="/catalog?brand=2" className="group xl:mx-2 md:mx-1">
              <p className=" font-light">Air Max</p>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-start gap-1">
            <Link to="/catalog?brand=1" className="flex xl:mx-2 md:mx-1">
              <p className="font-normal">New Balance</p>
            </Link>
            <Link to="/catalog?brand=1" className="flex xl:mx-2 md:mx-1">
              <p className=" font-light">Jordan's</p>
            </Link>
            <Link to="/catalog?brand=1" className="flex xl:mx-2 md:mx-1">
              <p className=" font-light">Air Max</p>
            </Link>
          </div>

          <div className="flex flex-col items-start gap-1">
            <Link to="/catalog?brand=1" className="flex xl:mx-2 md:mx-1">
              <span className="font-normal">PUMA</span>
            </Link>
            <Link to="/catalog?brand=1" className="flex xl:mx-2 md:mx-1">
              <span className=" font-light">Jordan's</span>
            </Link>
            <Link to="/catalog?brand=1" className="flex xl:mx-2 md:mx-1">
              <span className=" font-light">Air Max</span>
            </Link>
          </div>


        </div>)}
      </div>
    </div>
<div className="xl:hidden">
  <div className={`fixed left-0 ${ open === true ? "translate-x-[0] duration-700" : "-translate-x-[400px] duration-700"} items-center mt-6 flex-col top-0 w-[300px] flex transition-all h-full z-20 bg-white pt-[100px] `}>
    <a onClick={() => navigate('/catalog')} className="xl:px-2 xl:py-2 md:px-1 md:py-2">
      <span className="flex font-medium text-2xl" >КАТАЛОГ</span>
    </a>
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
