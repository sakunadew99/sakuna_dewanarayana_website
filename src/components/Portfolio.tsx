"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      image: "/images/port.png",
      link: "https://github.com/sakunadew99/EmployeeManagementSystem-SpringBoot",
      title: "Employee Management System",
      description: "A comprehensive Spring Boot application for managing employee records, attendance, and payroll with a modern interface.",
      tech: ["Spring Boot", "Java", "MySQL"],
      
    },
    {
      image: "/images/port6.png",
      link: "https://github.com/sakunadew99/salary-calculator-2024-Q1-sakunadew99-",
      title: "Salary Calculator",
      description: "An intuitive salary calculation tool with tax deductions, allowances, and detailed breakdowns for financial planning.",
      tech: ["React", "JavaScript", "CSS"],
      
    },
    {
      image: "/images/port4.png",
      link: "https://github.com/sakunadew99/BookStore-Mern_Stack",
      title: "BookStore MERN Stack",
      description: "Full-stack bookstore application built with MongoDB, Express, React, and Node.js featuring inventory management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      
    },
    {
      image: "/images/port3.png",
      link: "https://github.com/sakunadew99/sakunadew99.github.io",
      title: "Portfolio Website",
      description: "A responsive and modern portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      tech: ["HTML", "CSS", "JavaScript"],
    
    },
    {
      image: "/images/port5.png",
      link: "https://github.com/sakunadew99/Real-Time-Chat-Application",
      title: "Real-Time Chat Application",
      description: "WebSocket-powered chat application with real-time messaging, user authentication, and group chat functionality.",
      tech: ["WebSocket", "Node.js", "React"],
      
    },
    {
      image: "/images/weather.png",
      link: "https://github.com/sakunadew99/weather_app_React?tab=readme-ov-file",
      title: "Weather App React",
      description: "React-based weather application providing real-time weather updates, forecasts, and location-based weather information.",
      tech: ["React", "API", "Tailwind"],
      
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i, index });
    }
    return visible;
  };

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      {/* Animated Background */}
      <div className={styles.bgGradient}></div>
      <div className={styles.floatingOrb1}></div>
      <div className={styles.floatingOrb2}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            Recent Projects
          </div>
          
          <h2 className={styles.sectionTitle}>
            My <span className={styles.gradientText}>Portfolio</span>
          </h2>
          <div className={styles.titleUnderline}></div>
          
          <p className={styles.sectionSubtitle}>
            Showcasing my latest work and creative solutions
          </p>
        </div>

        {/* Carousel */}
        <div 
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            onClick={prevSlide}
            className={styles.navButton}
            aria-label="Previous slide"
          >
            <ChevronLeft className={styles.navIcon} />
          </button>

          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {getVisibleProjects().map((project) => {
                const isCenter = project.position === 0;
                const isLeft = project.position === -1;
                const isRight = project.position === 1;

                return (
                  <div
                    key={`${project.title}-${project.index}`}
                    className={`${styles.projectCard} ${
                      isCenter ? styles.centerCard : ''
                    } ${isLeft ? styles.leftCard : ''} ${
                      isRight ? styles.rightCard : ''
                    }`}
                    onClick={() => !isCenter && goToSlide(project.index)}
                  >
                    {/* Glow Effect */}
                   

                    
                    {/* Image Container */}
                    <div className={styles.projectImageWrapper}>
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className={styles.projectImage}
                        priority={isCenter}
                      />
                      
                      {/* Shine Effect */}
                      <div className={styles.projectShine}></div>
                      
                      {/* Category Badge */}
                      <div className={styles.projectBadge}>
                        <span className={styles.badgeText}>Project {project.index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      
                      <p className={styles.projectDescription}>{project.description}</p>

                      {/* Tech Stack */}
                      <div className={styles.techStack}>
                        {project.tech.map((tech, i) => (
                          <span key={i} className={styles.techBadge}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View Project</span>
                        <ExternalLink className={styles.linkIcon} />
                      </a>
                    </div>

                    {/* Hover Border */}
                    
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className={styles.navButton}
            aria-label="Next slide"
          >
            <ChevronRight className={styles.navIcon} />
          </button>
        </div>

        {/* Indicators */}
        <div className={styles.carouselIndicators}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.indicator} ${currentIndex === index ? styles.indicatorActive : ''}`}
              
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}