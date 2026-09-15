import React, { useState, useEffect, useRef, useCallback } from 'react';
import { industrySectors } from '../../../data/industrySectors';
import { IndustryBackground } from './IndustryBackground';
import { IndustryContent } from './IndustryContent';
import { IndustryThumbnailRail } from './IndustryThumbnailRail';
import { IndustryProgress } from './IndustryProgress';
import { IndustryNextButton } from './IndustryNextButton';
import { IndustryScrollCue } from './IndustryScrollCue';
import { IndustryOrganicLine } from './IndustryOrganicLine';
import styles from './IndustryFlow.module.css';

export const IndustryFlow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const totalSectors = industrySectors.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSectors);
  }, [totalSectors]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSectors) % totalSectors);
  }, [totalSectors]);

  const handleSelectSector = useCallback((index: number) => {
    if (index >= 0 && index < totalSectors) {
      setActiveIndex(index);
    }
  }, [totalSectors]);

  // Keyboard Navigation (Left / Right / Up / Down)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keys if container is in viewport
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (activeIndex < totalSectors - 1) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (activeIndex > 0) {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, totalSectors, handleNext, handlePrev]);



  // Touch Swipe on Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  const currentSector = industrySectors[activeIndex];

  return (
    <section
      ref={containerRef}
      id="setores"
      className={styles.industrySection}
      data-theme="black"
      aria-label="Setores e Aplicações Industriais BERUF"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Cinematic Photographic Background Stage */}
      <IndustryBackground
        sectors={industrySectors}
        activeIndex={activeIndex}
      />

      {/* 2. Signature Organic Energy Line (Behind Thumbnails) */}
      <IndustryOrganicLine activeIndex={activeIndex} />

      {/* 3. Main Stage Content Grid */}
      <div className={styles.stageGrid}>
        {/* Left: Headline & Sector Narrative */}
        <div className={styles.contentColumn}>
          <IndustryContent
            currentSector={currentSector}
            totalCount={totalSectors}
          />
        </div>

        {/* Right: Next Sector Interactive Button */}
        <div className={styles.actionColumn}>
          <IndustryNextButton
            onNext={handleNext}
            isLast={activeIndex === totalSectors - 1}
          />
        </div>
      </div>

      {/* 4. Bottom Controls: Thumbnails & Milestone Progress Line */}
      <div className={styles.bottomDock}>
        <IndustryThumbnailRail
          sectors={industrySectors}
          activeIndex={activeIndex}
          onSelectSector={handleSelectSector}
        />

        <IndustryProgress
          total={totalSectors}
          current={activeIndex}
          onSelect={handleSelectSector}
        />
      </div>

      {/* 5. Minimalist Scroll Indicator */}
      <IndustryScrollCue activeIndex={activeIndex} />
    </section>
  );
};
