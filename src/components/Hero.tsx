"use client";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
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
        <div className={styles.contentWrapper}>
          {/* Profile Image with Glow Effect */}
          <div className={styles.profileContainer}>
            <div className={styles.profileGlow}></div>
            <div className={styles.profileImageWrapper}>
              <Image
                src="/images/profile3.jpg"
                alt="Sakuna Dewanarayana"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className={styles.profileImage}
                priority
              />
              <div className={styles.profileBorder}></div>
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              Available for work
            </div>
          </div>

          {/* Greeting Text */}
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span> I&apos;m
          </div>

          {/* Name with Enhanced Styling */}
          <h1 className={styles.title}>
            Sakuna{" "}
            <span className={styles.gradientText}>Dewanarayana</span>
          </h1>

          {/* Typing Animation with Enhanced Style */}
          <div className={styles.typingWrapper}>
            <TypeAnimation
              sequence={[
                "Front End Developer",
                2000,
                "Back End Developer",
                2000,
                "Full Stack Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className={styles.typingText}
              repeat={Infinity}
            />
          </div>

          {/* Short Bio */}
          <p className={styles.bio}>
            Crafting elegant solutions with clean code and modern design.
            Passionate about creating seamless digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.ctaButtonPrimary}>
              <span>Let&apos;s Talk</span>
              <Mail className={styles.buttonIcon} />
            </a>
            <a href="#portfolio" className={styles.ctaButtonSecondary}>
              <span>View Work</span>
              <ArrowDown className={styles.buttonIcon} />
            </a>
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github className={styles.socialIcon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin className={styles.socialIcon} />
            </a>
            <a href="mailto:your@email.com" className={styles.socialLink}>
              <Mail className={styles.socialIcon} />
            </a>
            <a href="/resume.pdf" download className={styles.socialLink}>
              <Download className={styles.socialIcon} />
            </a>
          </div>

          {/* Scroll Indicator 
          <div className={styles.scrollIndicator}>
            <div className={styles.mouse}>
              <div className={styles.mouseWheel}></div>
            </div>
            <span className={styles.scrollText}>Scroll to explore</span>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}