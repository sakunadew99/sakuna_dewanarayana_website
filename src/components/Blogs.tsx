"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./Blogs.module.css";

export default function Blogs() {
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

  const blogs = [
    {
      image: "/images/blog11.jpg",
      title: "The Future Shaped by Artificial Intelligence: A Glimpse Into Tomorrow",
      description:
        "The dawn of Artificial Intelligence (AI) has irreversibly changed the landscape of our world, redefining the bounds of what's possible. Beyond its current applications, the potential future impacts of AI on society, economy, and our daily lives promise a transformation both exhilarating and daunting.",
      link: "https://medium.com/@sakuna.dewanarayana/the-future-shaped-by-artificial-intelligence-a-glimpse-into-tomorrow-987f6206090a",
    },
    {
      image: "/images/blog4.jpg",
      title: "Git A to Z Team Workflow Documentation",
      description:
        "This document provides a complete, step-by-step guide for using Git in a team environment, covering everything from setup to daily workflow and advanced Git commands.",
      link: "https://medium.com/@sakuna.dewanarayana/git-a-to-z-team-workflow-documentation-4d7ed5cbd993",
    },
    {
      image: "/images/blog5.jpg",
      title: "The Complete Beginner’s Guide to SQL Commands",
      description:
        "If data is the new oil, then SQL (Structured Query Language) is the engine, the refinery, and the entire transportation network combined.",
      link: "https://medium.com/@sakuna.dewanarayana/the-complete-beginners-guide-to-sql-commands-f5752ff9ac1a",
    },
  ];

  return (
    <section id="blogs" className={styles.blogsSection} ref={ref}>
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
          {/* Services Grid 
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            Latest Articles
          </div>*/}
          <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ''}`}>
            My <span className={styles.gradientText}>Blogs</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Thoughts, insights, and stories from my journey
          </p>
        </div>

        <div className={styles.blogsGrid}>
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className={`${styles.blogCard} ${inView ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.blogGlow}></div>
              <div className={styles.blogImageWrapper}>
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.blogImage}
                />
                <div className={styles.blogShine}></div>
                <div className={styles.imageOverlay}></div>
              </div>

              <div className={styles.blogContent}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogDescription}>{blog.description}</p>
                <a 
                  href={blog.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.blogLink}
                >
                  <span>Read Article</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}