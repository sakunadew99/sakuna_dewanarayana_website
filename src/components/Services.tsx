"use client";

import { useInView } from "react-intersection-observer";
import { Code2, Database, Layers, Globe, Palette, Smartphone, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "I specialize in creating visually appealing and user-friendly websites. Using HTML, CSS, JavaScript, and React, I build responsive and interactive interfaces. My focus is on ensuring that websites are easy to navigate and work well on all devices.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "I specialize in building robust and efficient backend systems for websites and applications. Using technologies like Node.js, Express, and databases, I create server-side logic, manage databases, and ensure seamless communication between the server and the user interface.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Layers,
      title: "Full Stack Development",
      description:
        "I specialize in full-stack web development, combining both frontend and backend skills to create complete and functional websites. My goal is to deliver seamless and efficient web solutions that provide great user experiences and meet clients' needs.",
      technologies: ["MERN Stack", "Spring Boot", "REST APIs", "GraphQL"],
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="services" className={styles.servicesSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.titleWrapper}>
          <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ''}`}>
            <span className={styles.gradientText}>My</span> Services
          </h2>
          <div className={styles.titleUnderline}></div>
          <p className={`${styles.subtitle} ${inView ? styles.visible : ''}`}>
            Comprehensive solutions for your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className={`${styles.serviceCard} ${inView ? styles.visible : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.cardContent}>
                  {/* Icon with Gradient Background */}
                  <div className={styles.iconWrapper}>
                    <div className={`${styles.iconBg} bg-gradient-to-br ${service.color}`}></div>
                    <IconComponent className={styles.serviceIcon} />
                  </div>

                  {/* Title */}
                  <h3 className={styles.serviceTitle}>{service.title}</h3>

                  {/* Description */}
                  <p className={styles.serviceDescription}>{service.description}</p>

                  {/* Technologies */}
                  <div className={styles.techStack}>
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  
                </div>

                {/* Hover Effect Border */}
                <div className={`${styles.hoverBorder} bg-gradient-to-br ${service.color}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}