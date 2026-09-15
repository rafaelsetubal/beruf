import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../../ui/Container';
import { KineticHeadline } from '../../ui/KineticHeadline/KineticHeadline';
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
      { threshold: 0.18 }
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
          {/* Left Column: Eyebrow + Kinetic Headline */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowText}>ENGENHARIA EM CONTINUIDADE</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <KineticHeadline
              lines={[
                'CONECTAMOS TECNOLOGIA',
                'AO MOVIMENTO DA',
                'INDÚSTRIA.',
              ]}
              highlightWord="INDÚSTRIA."
              theme="cream"
              isTriggered={isVisible}
              className={styles.headline}
              as="h2"
            />
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

        {/* 2. Protagonist Metrics with Precision Aligned Connecting Line */}
        <div className={styles.metricsContainer}>
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

                  {/* Connecting Milestone Node Dot on the Line (100% physically aligned) */}
                  <div className={styles.nodeWrapper} aria-hidden="true">
                    <div className={styles.lineSegmentBase} />
                    <div
                      className={[
                        styles.lineSegmentProgress,
                        styles[`lineProgress${index + 1}`],
                      ].join(' ')}
                    />
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
