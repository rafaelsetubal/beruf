import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../../ui/Container';
import styles from './HeroTransition.module.css';

interface MetricData {
  id: string;
  number: string;
  labelLine1: string;
  labelLine2: string;
  description: string;
}

const metrics: MetricData[] = [
  {
    id: 'experience',
    number: '+25',
    labelLine1: 'ANOS DE',
    labelLine2: 'EXPERIÊNCIA',
    description: 'Mais de duas décadas impulsionando a indústria com soluções confiáveis e de alta performance.',
  },
  {
    id: 'origin',
    number: '100%',
    labelLine1: 'EMPRESA',
    labelLine2: 'BRASILEIRA',
    description: 'Desenvolvimento, suporte e relacionamento próximos, com atuação em todo o país.',
  },
  {
    id: 'facilities',
    number: '02',
    labelLine1: 'UNIDADES',
    labelLine2: 'NO BRASIL',
    description: 'Estrutura preparada para atender o mercado com agilidade e proximidade.',
  },
];

export const HeroTransition: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={[
        styles.continuitySection,
        isVisible ? styles.revealed : '',
      ].filter(Boolean).join(' ')}
      data-theme="cream"
      id="a-beruf"
      aria-label="Engenharia em Continuidade"
    >
      <Container maxWidth="2xl">
        {/* 1. Top Editorial Split Grid: Headline (Left) & Narrative + CTA (Right) */}
        <div className={styles.editorialGrid}>
          {/* Left Column: Eyebrow + Display Headline */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowText}>ENGENHARIA EM CONTINUIDADE</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.headline}>
              CONECTAMOS TECNOLOGIA<br />
              AO MOVIMENTO DA<br />
              <span className={styles.highlightOrange}>INDÚSTRIA.</span>
            </h2>
          </div>

          {/* Right Column: Supporting Body Text & Secondary Outline CTA */}
          <div className={styles.rightCol}>
            <p className={styles.description}>
              Desde 1998, a BERUF fornece cabos especiais, componentes e tecnologias para aplicações industriais onde movimento, precisão e continuidade são essenciais.
            </p>

            <a href="#solucoes" className={styles.aboutCta}>
              <span>CONHEÇA A BERUF</span>
              <span className={styles.aboutCtaArrow} aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* 2. Protagonist Metrics with Animated Connecting Spline */}
        <div className={styles.metricsContainer}>
          {/* Connecting SVG Spline (Cable Line Across the 3 Nodes) */}
          <div className={styles.lineContainer} aria-hidden="true">
            <svg
              className={styles.lineSvg}
              viewBox="0 0 1200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="continuityGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF7500" stopOpacity="0.2" />
                  <stop offset="25%" stopColor="#FF7500" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#FFA03A" stopOpacity="1" />
                  <stop offset="75%" stopColor="#FF7500" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF7500" stopOpacity="0.2" />
                </linearGradient>

                <filter id="cableAura" x="-10%" y="-100%" width="120%" height="300%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Guide Line (Neutral) */}
              <path
                d="M 40,40 C 300,52 480,26 600,38 C 720,50 900,28 1160,40"
                stroke="rgba(17, 17, 19, 0.08)"
                strokeWidth="1.5"
              />

              {/* Animated Orange Cable Core */}
              <path
                className={styles.animatedPath}
                d="M 40,40 C 300,52 480,26 600,38 C 720,50 900,28 1160,40"
                stroke="url(#continuityGlow)"
                strokeWidth="2"
                filter="url(#cableAura)"
              />
            </svg>
          </div>

          {/* 3 Metrics Columns */}
          <div className={styles.metricsGrid}>
            {metrics.map((m, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={m.id}
                  className={[
                    styles.metricItem,
                    styles[`metricDelay${index + 1}`],
                    isHovered ? styles.metricHovered : '',
                  ].filter(Boolean).join(' ')}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Big Protagonist Number */}
                  <div className={styles.numberRow}>
                    <span className={styles.metricNumber}>{m.number}</span>
                  </div>

                  {/* Connecting Milestone Node Dot on the Line */}
                  <div className={styles.nodeWrapper} aria-hidden="true">
                    <div
                      className={[
                        styles.nodeDot,
                        styles[`nodeDelay${index + 1}`],
                        isHovered ? styles.nodeDotActive : '',
                      ].filter(Boolean).join(' ')}
                    >
                      <div className={styles.nodeInnerRing} />
                    </div>
                  </div>

                  {/* 2-line Technical Label */}
                  <div className={styles.labelRow}>
                    <span className={styles.labelLine}>{m.labelLine1}</span>
                    <span className={styles.labelLine}>{m.labelLine2}</span>
                  </div>

                  {/* Supporting Description */}
                  <p className={styles.metricDescription}>{m.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
