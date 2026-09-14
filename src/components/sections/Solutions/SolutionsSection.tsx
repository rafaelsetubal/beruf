import React from 'react';
import { Container } from '../../ui/Container';
import cableCoreImg from '../../../assets/images/beruf-cable-core.png';
import cableHeroImg from '../../../assets/images/beruf-cable-hero.png';
import roboticHeroImg from '../../../assets/images/beruf-robotic-hero.png';
import styles from './SolutionsSection.module.css';

interface SolutionCardData {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc?: string;
  imageAlt: string;
  isPlaceholder?: boolean;
}

const solutionsData: SolutionCardData[] = [
  {
    id: 'cabos',
    title: 'CABOS ELÉTRICOS ESPECIAIS',
    description: 'Cabos para automação, servomotores, redes industriais e movimentação contínua de altíssima durabilidade.',
    linkText: 'EXPLORAR CABOS',
    linkHref: '#cabos-eletricos-especiais',
    imageSrc: cableCoreImg,
    imageAlt: 'Cabos Elétricos Especiais BERUF',
  },
  {
    id: 'esteiras',
    title: 'ESTEIRAS PORTA-CABOS',
    description: 'Sistemas em polímero e aço para proteção e condução dinâmica de cabos e mangueiras industriais.',
    linkText: 'EXPLORAR ESTEIRAS',
    linkHref: '#esteiras-porta-cabos',
    imageSrc: cableHeroImg,
    imageAlt: 'Esteiras Porta-Cabos BERUF',
  },
  {
    id: 'protecao',
    title: 'PROTEÇÃO DE CABOS',
    description: 'Conduítes, prensa-cabos, calhas e tubos flexíveis projetados para máxima resistência mecânica e química.',
    linkText: 'EXPLORAR PROTEÇÃO',
    linkHref: '#protecao-de-cabos',
    isPlaceholder: true,
    imageAlt: 'Proteção de Cabos BERUF',
  },
  {
    id: 'robotica',
    title: 'PERIFÉRICOS PARA ROBÓTICA',
    description: 'Dresspacks, sistemas de articulação, fixação e retração desenvolvidos para robôs articulados e células.',
    linkText: 'EXPLORAR ROBÓTICA',
    linkHref: '#perifericos-robotica',
    imageSrc: roboticHeroImg,
    imageAlt: 'Periféricos para Robótica BERUF',
  },
];

export const SolutionsSection: React.FC = () => {
  return (
    <section className={styles.solutionsSection} data-theme="cream" id="solucoes" aria-label="Soluções BERUF">
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
              <span className={styles.linkArrow}>↗</span>
            </a>
          </div>
        </div>

        {/* 4 Industrial Product Cards */}
        <div className={styles.cardsGrid}>
          {solutionsData.map((card) => (
            <article key={card.id} className={styles.card}>
              {/* Product Visual Top Box */}
              <div className={styles.imageBox}>
                {card.imageSrc ? (
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className={styles.productImage}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.placeholderBox}>
                    <div className={styles.placeholderPattern} />
                    <span className={styles.placeholderText}>EM BREVE</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>

                <a href={card.linkHref} className={styles.cardLink}>
                  <span>{card.linkText}</span>
                  <span className={styles.cardLinkArrow}>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
