import React from 'react';
import { Container } from '../../ui/Container';
import facilityImg from '../../../assets/images/beruf-automotive-cell.png';
import styles from './HeroTransition.module.css';

export const HeroTransition: React.FC = () => {
  return (
    <section className={styles.continuitySection} data-theme="cream" aria-label="Engenharia em Continuidade">
      <Container maxWidth="2xl">
        <div className={styles.continuityGrid}>
          {/* Top Left: Eyebrow + Display Headline + Description + CTA */}
          <div className={styles.leftNarrative}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowText}>ENGENHARIA EM CONTINUIDADE</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.headline}>
              CONECTAMOS TECNOLOGIA<br />
              AO MOVIMENTO DA INDÚSTRIA.
            </h2>

            <p className={styles.description}>
              Desde 1998, a BERUF fornece cabos especiais, sistemas de proteção, componentes e tecnologias para aplicações industriais onde movimento, precisão e continuidade são essenciais.
            </p>

            <a href="#a-beruf" className={styles.aboutCta}>
              <span>CONHEÇA A BERUF</span>
              <span className={styles.aboutCtaArrow}>↗</span>
            </a>
          </div>

          {/* Top Right: 3 Key Metrics */}
          <div className={styles.metricsRow}>
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>+25</span>
              <span className={styles.metricLabel}>
                ANOS<br />DE EXPERIÊNCIA
              </span>
            </div>

            <div className={styles.metricDivider} aria-hidden="true" />

            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>100%</span>
              <span className={styles.metricLabel}>
                EMPRESA<br />BRASILEIRA
              </span>
            </div>

            <div className={styles.metricDivider} aria-hidden="true" />

            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>2</span>
              <span className={styles.metricLabel}>
                UNIDADES<br />NO BRASIL
              </span>
            </div>
          </div>
        </div>

        {/* Facility Image Plate with Editorial Cutout Tag */}
        <div className={styles.facilityPlateWrapper}>
          <div className={styles.facilityImageFrame}>
            <img
              src={facilityImg}
              alt="Instalações e Unidade Industrial BERUF"
              className={styles.facilityImage}
            />
          </div>

          <div className={styles.facilityCutoutCard}>
            <span className={styles.cutoutLine1}>SOLUÇÕES</span>
            <span className={styles.cutoutLine2}>QUE MANTÊM</span>
            <span className={styles.cutoutLine3}>A INDÚSTRIA</span>
            <span className={styles.cutoutLine4}>EM MOVIMENTO.</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
