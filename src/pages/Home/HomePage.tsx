import React from 'react';
import { CinematicHero, HeroTransition } from '../../components/hero/CinematicHero';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      {/* 1. Nova Hero Cinematográfica (100vh Fullscreen, Scroll Progression) */}
      <CinematicHero />

      {/* 2. Transição Atmosférica Suave para o Início da Home (Black -> Orange -> Cream) */}
      <HeroTransition />
    </div>
  );
};
