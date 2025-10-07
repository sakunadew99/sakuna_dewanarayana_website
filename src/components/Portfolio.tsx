"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10 - 5,
        y: (e.clientY / window.innerHeight) * 10 - 5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      {/* Animated Background Elements */}
      <div className={styles.bgGradient}></div>
      <div 
        className={styles.floatingOrb1}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      ></div>
      <div 
        className={styles.floatingOrb2}
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      ></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            Recent Projects
          </div>
          <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ''}`}>
            My <span className={styles.gradientText}>Portfolio</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Showcasing my latest work and creative solutions
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${styles.projectCard} ${inView ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.projectGlow}></div>
              <div className={styles.projectImageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.projectImage}
                />
                <div className={styles.projectShine}></div>
              </div>

              <div className={styles.projectOverlay}>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.projectLink}
                  >
                    <span>View Project</span>
                    <svg 
                      className={styles.linkIcon} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}