import { useEffect, useState, useRef } from "react";
import bg from "./assets/Artboard1.png";
import styles from "./mainView.module.css";

export default function App() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
      }}
    >
      <header className={styles.headerContainer}>
        <nav>
          <ul className={styles.headerList}>
            <li className={styles.headerListItem}>
              <a href="#">About</a>
            </li>
            <li className={styles.headerListItem}>
              <a href="#">Projects</a>
            </li>
            <li className={styles.headerListItem}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.container}>
        <div className={styles.home}>
          <div className={styles.homeTitle}>
            <div className={styles.homeTitleTop}>Hello, I am</div>
            <div className={styles.homeTitleBottom}>EDUARDO RAMÓN</div>
            <div className={styles.homeSubtitle}>I am Just a Coder</div>
            <div className={styles.homeButton}>
              <a href="#">view more</a>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.coderText}>CODER</footer>
    </div>
  );
}
