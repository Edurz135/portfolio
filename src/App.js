import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./mainView.module.css";
export default function App() {
  const draw = {
    hidden: { pathLength: 0, opacity: 1 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        backgroundColor: "#fff4d7",
        
      }}
    >
      <div className={styles.container} style={{zIndex: "0", filter: "blur(20px)"}}>
        <img src={""} height="100%"/>
      </div>
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
          <div style={{ zIndex: "0", position: "absolute" }}>
            <motion.svg
              width="100vw"
              height="20vw"
              viewBox="0 0 100 20"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M -5 5 Q 18 12 50 11 Q 80 10 110 18"
                stroke="#ffe249"
                stroke-width="5px"
                fill="transparent"
                variants={draw}
              />
              <motion.path
                d="M -5 3 Q 15 9 50 6 Q 85 3 110 5"
                stroke="#ffaf38"
                stroke-width="3px"
                fill="transparent"
                variants={draw}
              />
            </motion.svg>
          </div>
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
