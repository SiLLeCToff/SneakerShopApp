import React, { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import styles from "./ButtonAdd.module.css";
export const ButtonAdd = () => {
  const [open, setOpen] = useState(false);

  const handleClickModal = (e) => {
    e.preventDefault();
    if (open === true) {
      setOpen(false);
    }
    if (open === false) {
      setOpen(true);
    }
  };

  return (
    <button
      onClose={(e) => setOpen(false)}
      onClick={(e) => handleClickModal(e)}
      className={styles.button}
    >
      <ModalWindow setOpen={setOpen} open={open} />
      <span className={styles.button__text}>Добавить</span>
      <span className={styles.button__icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          height="24"
          fill="none"
          className="svg"
        >
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
      </span>
    </button>
  );
};
