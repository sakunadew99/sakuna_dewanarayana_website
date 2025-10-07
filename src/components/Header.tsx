"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Set dark mode on initial load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`${styles.header} ${
        scrolled 
          ? styles.headerScrolled
          : styles.headerTransparent
      }`}
    >
      <nav className={styles.nav}>
        <div className={styles.container}>
          {/* Logo - Commented out as per original */}
          {/* 
          <div className={styles.logo}>
            <div className={styles.logoText}>
              Portfolio
            </div>
          </div>
          */}

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name.toLowerCase())}
                className={`${styles.navLink} ${
                  activeSection === link.name.toLowerCase() ? styles.navLinkActive : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={styles.navLinkText}>{link.name}</span>
                <span className={styles.navLinkBg}></span>
                <span className={styles.navLinkUnderline}></span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className={styles.actions}>
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              <div className={styles.themeIconWrapper}>
                {isDark ? (
                  <Sun className={styles.sunIcon} />
                ) : (
                  <Moon className={styles.moonIcon} />
                )}
              </div>
              <div className={styles.themeToggleBg}></div>
            </button>

            {/* CTA Button - Desktop */}
            <a href="#contact" className={styles.ctaButton}>
              <span className={styles.ctaButtonText}>Get in Touch</span>
              <div className={styles.ctaButtonBg}></div>
              <div className={styles.ctaButtonBgHover}></div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.mobileMenuButton}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={styles.menuIconClose} />
              ) : (
                <Menu className={styles.menuIcon} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
          }`}
        >
          <div className={styles.mobileMenuContent}>
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`${styles.mobileNavLink} ${
                  activeSection === link.name.toLowerCase() ? styles.mobileNavLinkActive : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={styles.mobileNavLinkContent}>
                  {link.name}
                  <ChevronDown className={styles.chevronIcon} />
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className={styles.mobileCta}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}