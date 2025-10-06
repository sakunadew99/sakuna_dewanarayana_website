"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Profile Image */}
          <div className={styles.profileImageWrapper}>
            <Image
              src="/images/profile3.jpg"
              alt="Sakuna Dewanarayana"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className={styles.profileImage}
              priority
            />
          </div>

          {/* Name */}
          <h1 className={styles.title}>
            Sakuna <span className={styles.gradientText}>Dewanarayana</span>
          </h1>

          {/* Typing Animation */}
          <div className={styles.typingWrapper}>
            <span>I AM A </span>
            <TypeAnimation
              sequence={[
                "Front End Developer",
                2000,
                "Back End Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className={`${styles.gradientText} ${styles.typingText}`}
              repeat={Infinity}
            />
          </div>

          {/* CTA Button */}
          <a href="#about" className={styles.ctaButton}>
            ABOUT ME
          </a>
        </div>
      </div>
    </section>
  );
}