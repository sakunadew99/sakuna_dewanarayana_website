"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>
          created by{" "}
          <span className={styles.gradientText}>Sakuna Dewanarayana</span>{" "}
          | all rights reserved.
        </p>
      </div>
    </footer>
  );
}