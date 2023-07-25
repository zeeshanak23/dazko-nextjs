
import React from 'react';
import styles from "../src/styles//Navigation.module.css";


export default function Navigation () {
  return (
    <section className={styles.dazkoSection}>
      <div className="dazko">
        <img src='../dazko/bg2.webp'></img>
      </div>
      <div className={styles.name}></div>
    </section>
  );
}
