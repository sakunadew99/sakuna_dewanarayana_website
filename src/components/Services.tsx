"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { 
  Code2, 
  Database, 
  Layers, 
  BarChart3, 
  BrainCircuit, 
  TrendingUp, 
  Cpu, 
  Network, 
  LineChart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "I specialize in creating visually appealing and user-friendly websites. Using HTML, CSS, JavaScript, and React, I build responsive and interactive interfaces.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "I specialize in building robust and efficient backend systems for websites and applications. Using Node.js, Express, and databases, I create server-side logic and manage databases.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Layers,
      title: "Full Stack Development",
      description:
        "I specialize in full-stack web development, combining both frontend and backend skills to create complete and functional websites with seamless user experiences.",
      technologies: ["MERN Stack", "Spring Boot", "REST APIs", "GraphQL"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description:
        "I analyze complex datasets to extract meaningful insights and patterns. Using statistical methods and machine learning, I help businesses make data-driven decisions.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Network,
      title: "Data Engineering",
      description:
        "I design and build robust data pipelines and infrastructure. Creating scalable ETL processes, I ensure data flows smoothly from various sources to analytics platforms.",
      technologies: ["Apache Spark", "Airflow", "Kafka", "AWS"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description:
        "I transform raw data into actionable insights through comprehensive analysis. Using visualization tools and statistical techniques, I help identify trends and opportunities.",
      technologies: ["Tableau", "Power BI", "SQL", "Excel"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description:
        "I develop intelligent systems that learn from data and improve over time. Building predictive models and algorithms, I create solutions for complex problems.",
      technologies: ["TensorFlow", "PyTorch", "Keras", "XGBoost"],
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description:
        "I create intelligent applications using cutting-edge AI technologies. From natural language processing to computer vision, I develop AI-powered solutions.",
      technologies: ["OpenAI", "LangChain", "Hugging Face", "BERT"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description:
        "I help organizations leverage data for strategic decision-making. Creating interactive dashboards and reports, I provide insights into business performance.",
      technologies: ["Power BI", "Tableau", "QlikView", "Looker"],
      color: "from-sky-500 to-cyan-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      visible.push({ ...services[index], position: i });
    }
    return visible;
  };

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

        {/* Carousel Section */}
        <div className={styles.carouselWrapper}>
          <button 
            className={styles.carouselButton}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className={styles.chevronIcon} />
          </button>

          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {getVisibleServices().map((service, idx) => {
                const IconComponent = service.icon;
                const isCenter = service.position === 0;
                const isLeft = service.position === -1;
                const isRight = service.position === 1;
                
                return (
                  <div 
                    key={`${service.title}-${idx}`}
                    className={`${styles.serviceCard} ${styles.carouselCard} ${
                      isCenter ? styles.centerCard : ''
                    } ${isLeft ? styles.leftCard : ''} ${
                      isRight ? styles.rightCard : ''
                    } ${inView ? styles.visible : ''}`}
                  >
                    <div className={styles.cardContent}>
                      <div className={styles.iconWrapper}>
                        <div className={`${styles.iconBg} bg-gradient-to-br ${service.color}`}></div>
                        <IconComponent className={styles.serviceIcon} />
                      </div>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceDescription}>{service.description}</p>
                      <div className={styles.techStack}>
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={styles.techBadge}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`${styles.hoverBorder} bg-gradient-to-br ${service.color}`}></div>
                  </div>
                );
              })}
            </div>
          </div>

          <button 
            className={styles.carouselButton}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className={styles.chevronIcon} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className={styles.carouselIndicators}>
          {services.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${currentIndex === index ? styles.indicatorActive : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}