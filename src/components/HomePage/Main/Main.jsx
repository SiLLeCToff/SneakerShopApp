import React from "react";
import styles from "./Main.module.css";
import { TextCenter } from "./TextCenter/TextCenter";
export const Main = () => {
  return (
    <div className={styles.main}>
      <div className="flex h-4/6 w-full items-start justify-center">
        <div className="flex flex-col justify-start items-start">
        <h1 className="text-[#E8E8E8] text-[132px] font-bold max-sm:text-[85px]">JORDAN</h1>
        <h2 className="text-[#C10D06] text-[42px] font-extrabold">AIR</h2>
        </div>
          <img src="src/images/JordanMain.png" className="absolute 2xl:w-[1300px] h-full object-contain 2xl:-translate-y-[50px] md:-translate-y-[50px]" alt="Jordan"/>
      </div>
      <div className="flex flex-col h-2/6 w-full justify-end items-end pr-[75px]">
          <h2 className="flex font-extrabold text-[#C10D06] text-[25px]">125 000 РУБ</h2>
          <h2 className="flex font-extrabold text-[45px]">JORDAN AIR</h2>
          <h2 className="flex font-extrabold text-[45px]">RETRO 3</h2>

      </div>
    </div>
  );
};
