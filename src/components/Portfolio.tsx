"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      image: "/images/port.png",
      link: "https://github.com/sakunadew99/EmployeeManagementSystem-SpringBoot",
      title: "Employee Management System",
    },
    {
      image: "/images/port6.png",
      link: "https://github.com/sakunadew99/salary-calculator-2024-Q1-sakunadew99-",
      title: "Salary Calculator",
    },
    {
      image: "/images/port4.png",
      link: "https://github.com/sakunadew99/BookStore-Mern_Stack",
      title: "BookStore MERN Stack",
    },
    {
      image: "/images/port3.png",
      link: "https://github.com/sakunadew99/sakunadew99.github.io",
      title: "Portfolio Website",
    },
    {
      image: "/images/port5.png",
      link: "https://github.com/sakunadew99/Real-Time-Chat-Application",
      title: "Real-Time Chat Application",
    },
    {
      image: "/images/weather.png",
      link: "https://github.com/sakunadew99/weather_app_React?tab=readme-ov-file",
      title: "Weather App React",
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolioSection} ref={ref}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ''}`}>
          <span className={styles.gradientText}>my</span> portfolio
        </h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.projectCard} ${inView ? styles.visible : ''}`}>
              <div className={styles.projectImageWrapper}>
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>

              <div className={styles.projectOverlay}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}