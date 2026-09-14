import React from 'react';
import { CinematicHero, HeroTransition } from '../../components/hero/CinematicHero';
import { SolutionsSection } from '../../components/sections/Solutions';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      {/* 1. Hero Cinematográfica com Moldura de 16px e CTA Metalizado */}
      <CinematicHero />

      {/* 2. Engenharia em Continuidade (Métricas e Instalações BERUF) */}
      <HeroTransition />

      {/* 3. Soluções Industriais (Grid de 4 Cards Escuros) */}
      <SolutionsSection />
    </div>
  );
};

