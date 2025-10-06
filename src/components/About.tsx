"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ""}`}>
          about <span className={styles.gradientText}>me</span>
        </h2>

        <div className={styles.contentGrid}>
          {/* Image */}
          <div className={`${styles.imageWrapper} ${inView ? styles.visible : ""}`}>
            <Image
              src="/images/aboutme1.jpg"
              alt="About Me"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className={`${styles.contentWrapper} ${inView ? styles.visible : ""}`}>
            <h3 className={styles.contentTitle}>
              my name is <span className={styles.gradientText}>sakuna dewanarayana</span>
            </h3>

            <p className={styles.description}>
              I&apos;m a passionate full-stack developer who thrives on building seamless web
              applications. Whether it&apos;s designing user-friendly interfaces with React.js or
              crafting robust back-end logic with Node.js and Spring Boot, I enjoy tackling all
              aspects of the development journey. My toolbox also includes the classics: HTML, CSS,
              JavaScript, and Java.
            </p>

            {/* Info Boxes */}
            <div className={styles.infoGrid}>
              <div className={styles.infoColumn}>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>age:</span> 25
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>gender:</span> Male
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>address:</span> Matara, Southern Province
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>Linkedin:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/sakuna-dewanarayana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    sakuna-dewanarayana
                  </a>
                </p>
              </div>

              <div className={styles.infoColumn}>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>language:</span> English
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>phone:</span> +94 717923200
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>email:</span>{" "}
                  <a
                    href="mailto:sakuna.dewanarayana@gmail.com"
                    className={styles.infoLink}
                  >
                    sakuna.dewanarayana@gmail.com
                  </a>
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>Github:</span>{" "}
                  <a
                    href="https://github.com/sakunadew99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    sakunadew99
                  </a>
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="https://drive.google.com/file/d/1lMvbS9ErbIGS7I1yOoL0aMdKfTtVXZlz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
