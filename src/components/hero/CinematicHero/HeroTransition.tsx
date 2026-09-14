import React from 'react';
import { Container } from '../../ui/Container';
import continuityCableImg from '../../../assets/images/beruf-continuity-cable.png';
import styles from './HeroTransition.module.css';

export const HeroTransition: React.FC = () => {
  return (
    <section className={styles.transitionSection} data-theme="cream" aria-label="Engenharia em Continuidade">
      {/* Background Ambient Glow Behind Glowing Cable Connector Tip */}
      <div className={styles.connectorAuraGlow} aria-hidden="true" />

      {/* 3D Illuminated BERUF Cable Asset */}
      <div className={styles.cableContainer} aria-hidden="true">
        <img
          src={continuityCableImg}
          alt="Cabo de Alta Performance BERUF"
          className={styles.cableImage}
        />
      </div>

      <Container maxWidth="2xl">
        <div className={styles.contentWrapper}>
          {/* Eyebrow */}
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowText}>ENGENHARIA EM CONTINUIDADE</span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
          </div>

          {/* Main Display Headline */}
          <h2 className={styles.headline}>
            Conectando a próxima<br />
            geração da automação<br />
            e da robótica industrial.
          </h2>

          {/* Editorial Lead Description */}
          <p className={styles.description}>
            Desde 1998, a BERUF fornece cabos especiais, sistemas de proteção, componentes e tecnologias para aplicações industriais onde movimento, precisão e continuidade são essenciais.
          </p>

          {/* 4-Column Metric Grid with Fine Dividers */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>+25</span>
              <span className={styles.metricLabel}>
                ANOS<br />DE MERCADO
              </span>
            </div>

            <div className={styles.metricDivider} aria-hidden="true" />

            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>+5.000</span>
              <span className={styles.metricLabel}>
                SOLUÇÕES<br />FORNECIDAS
              </span>
            </div>

            <div className={styles.metricDivider} aria-hidden="true" />

            <div className={styles.metricItem}>
              <span className={styles.metricHeading}>ATENDIMENTO</span>
              <span className={styles.metricLabel}>
                EM TODO O<br />BRASIL
              </span>
            </div>

            <div className={styles.metricDivider} aria-hidden="true" />

            <div className={styles.metricItem}>
              <span className={styles.metricHeading}>PARCERIA</span>
              <span className={styles.metricLabel}>
                PARA UM FUTURO<br />MAIS EFICIENTE
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
