import React from "react";
import styles from "./IsLoading.module.css";

function IsLoading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg className={styles.svgg} viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
}

export default IsLoading;
