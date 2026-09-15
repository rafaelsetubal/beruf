import React from 'react';
import { Container } from '../../ui/Container';
import { SolutionCard, type SolutionCardProps } from './SolutionCard';

// Shared Background Asset
import sharedBg from '../../../assets/images/solutions/solutions-bg.png';

// Product Assets
import cablesImg from '../../../assets/images/solutions/card1-cables.jpg';
import carriersImg from '../../../assets/images/solutions/card2-carriers.jpg';
import protectionImg from '../../../assets/images/solutions/card3-protection.png';
import roboticsImg from '../../../assets/images/solutions/card4-robotics.png';

import styles from './SolutionsSection.module.css';

const solutionsData: SolutionCardProps[] = [
  {
    id: 'cables',
    title: 'CABOS ELÉTRICOS ESPECIAIS',
    description: 'Cabos para automação, servomotores, redes industriais e movimentação contínua de alta exigência.',
    linkText: 'EXPLORAR CABOS',
    linkHref: '#cabos-eletricos-especiais',
    product: cablesImg,
    background: sharedBg,
    imageAlt: 'Cabos Elétricos Especiais BERUF',
    productScale: 1.25,
    productY: '-14%',
    productX: '-4%',
    productRotate: '-2deg',
    productWidth: '130%',
    productHeight: '80%',
    productBlendMode: 'screen',
  },
  {
    id: 'cable-carriers',
    title: 'ESTEIRAS PORTA-CABOS',
    description: 'Sistemas em polímero e aço para proteção e condução dinâmica de cabos e mangueiras industriais.',
    linkText: 'EXPLORAR ESTEIRAS',
    linkHref: '#esteiras-porta-cabos',
    product: carriersImg,
    background: sharedBg,
    imageAlt: 'Esteiras Porta-Cabos Industriais BERUF',
    productScale: 1.22,
    productY: '-10%',
    productX: '2%',
    productRotate: '0deg',
    productWidth: '130%',
    productHeight: '80%',
    productBlendMode: 'screen',
  },
  {
    id: 'protection',
    title: 'PROTEÇÃO DE CABOS',
    description: 'Conduítes, prensa-cabos, calhas e tubos flexíveis corrugados projetados para máxima resistência.',
    linkText: 'EXPLORAR PROTEÇÃO',
    linkHref: '#protecao-de-cabos',
    product: protectionImg,
    background: sharedBg,
    imageAlt: 'Proteção de Cabos e Tubos Corrugados BERUF',
    productScale: 1.24,
    productY: '-18%',
    productX: '4%',
    productRotate: '0deg',
    productWidth: '128%',
    productHeight: '82%',
  },
  {
    id: 'robotics',
    title: 'PERIFÉRICOS PARA ROBÓTICA',
    description: 'Dresspacks, sistemas de articulação, fixação e retração desenvolvidos para robôs industriais.',
    linkText: 'EXPLORAR ROBÓTICA',
    linkHref: '#perifericos-robotica',
    product: roboticsImg,
    background: sharedBg,
    imageAlt: 'Periféricos para Robótica e Dresspacks BERUF',
    productScale: 1.25,
    productY: '-15%',
    productX: '4%',
    productRotate: '0deg',
    productWidth: '130%',
    productHeight: '80%',
  },
];

export const SolutionsSection: React.FC = () => {
  return (
    <section className={styles.solutionsSection} data-theme="cream" id="solucoes" aria-label="Soluções Industriais BERUF">
      <Container maxWidth="2xl">
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowText}>SOLUÇÕES</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.headline}>
              TUDO O QUE O<br />
              MOVIMENTO<br />
              INDUSTRIAL EXIGE.
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.headerDescription}>
              Quatro famílias de soluções integradas para aumentar a performance, a segurança e a vida útil dos seus equipamentos.
            </p>

            <a href="#catalogo" className={styles.allSolutionsLink}>
              <span>EXPLORAR TODAS AS SOLUÇÕES</span>
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* 4 Layered Editorial Solution Cards */}
        <div className={styles.cardsGrid}>
          {solutionsData.map((card) => (
            <SolutionCard key={card.id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
