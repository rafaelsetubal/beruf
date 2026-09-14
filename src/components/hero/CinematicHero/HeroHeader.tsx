import React, { useState, useEffect } from 'react';
import berufLogo from '../../../assets/brand/beruf-logo.png';
import styles from './HeroHeader.module.css';

export interface HeroHeaderProps {
  onContactClick?: () => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Trigger state change when scrolled past ~80% of the viewport height (exiting Hero)
      const threshold = (window.innerHeight || 800) * 0.8;
      setIsPastHero(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={[
        styles.heroHeader,
        isScrolled ? styles.headerScrolled : '',
        isPastHero ? styles.scrolledPastHero : '',
      ].filter(Boolean).join(' ')}
      aria-label="Navegação Principal"
    >
      {/* Left: Brand Wordmark + 2-line Tagline */}
      <a href="/" className={styles.brandLink}>
        <img
          src={berufLogo}
          alt="BERUF"
          className={styles.brandLogo}
        />
        <div className={styles.brandDescriptor}>
          <span>SOLUÇÕES INDUSTRIAIS</span>
          <span>EM MOVIMENTO</span>
        </div>
      </a>

      {/* Center: Clean Editorial Navigation */}
      <nav className={styles.nav} aria-label="Menu Principal">
        <a href="#produtos" className={styles.navLink}>PRODUTOS</a>
        <a href="#solucoes" className={styles.navLink}>SOLUÇÕES</a>
        <a href="#a-beruf" className={styles.navLink}>A BERUF</a>
        <a href="#conteudo" className={styles.navLink}>CONTEÚDO</a>
        <a href="#contato" className={styles.navLink}>CONTATO</a>
      </nav>

      {/* Right: Search, Language & Specialist CTA */}
      <div className={styles.headerActions}>
        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Buscar no site"
          title="Buscar"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        <button type="button" className={styles.langSwitch} title="Idioma: Português">
          <span>PT</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <a
          href="#contato"
          className={styles.specialistBtn}
          onClick={(e) => {
            if (onContactClick) {
              e.preventDefault();
              onContactClick();
            }
          }}
        >
          <span>FALE COM ESPECIALISTA</span>
          <span className={styles.arrowIcon}>↗</span>
        </a>
      </div>
    </header>
  );
};
