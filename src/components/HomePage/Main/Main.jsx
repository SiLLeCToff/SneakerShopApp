import React from "react";
import styles from "./Main.module.css";
import { TextCenter } from "./TextCenter/TextCenter";
export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className=" flex flex-col gap-7">
          <h1 className=" 2xl:text-9xl xl:text-7xl">Осенний Вайб</h1>
        </div>
        <div className="py-3 px-6 bg-white rounded-full">
          <h2 className="text-xl max-w-md whitespace-nowrap">
            Скидки на серию "Dark Mocha" от бренда NIKE
          </h2>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.bgSnackers1}>
          <div className={styles.textdiv1}>
            <span className={styles.brand}>NIKE</span>
            <span className={styles.description}>
              Air Jordan 1 Retro High OG "Dark Mocha"
            </span>
            <span className={styles.price}>500$</span>
            <div className={styles.air1}></div>
          </div>
        </div>
        <TextCenter />
        <div className={styles.bgSnackers2}>
          <div className={styles.textdiv2}>
            <span className={styles.brand2}>NIKE</span>
            <span className={styles.description2}>
              Air Jordan 1 Retro High OG "Dark Mocha"
            </span>
            <span className={styles.price2}>500$</span>
            <div className={styles.air2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
