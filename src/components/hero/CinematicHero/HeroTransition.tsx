import React from 'react';
import { Container } from '../../ui/Container';
import styles from './HeroTransition.module.css';

export const HeroTransition: React.FC = () => {
  return (
    <section className={styles.transitionContainer} data-theme="cream" aria-label="Engenharia em Continuidade">
      <Container maxWidth="2xl">
        <div className={styles.editorialGrid}>
          {/* Left Column: Eyebrow + Large Display Headline */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrowRow}>
              <span className={styles.transitionEyebrow}>ENGENHARIA EM CONTINUIDADE</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.transitionHeadline}>
              Conectando a próxima<br />
              geração da automação<br />
              e da robótica industrial.
            </h2>
          </div>

          {/* Right Column: Refined Editorial Narrative (Pure typography, no metric boxes) */}
          <div className={styles.rightCol}>
            <p className={styles.transitionNarrative}>
              Desde 1998, a BERUF projeta e fornece sistemas de cabos especiais e esteiras porta-cabos para os desafios mais severos e contínuos da indústria.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
