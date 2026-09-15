import React, { useEffect, useRef } from 'react';
import { type IndustrySector } from '../../../data/industrySectors';
import styles from './IndustryThumbnailRail.module.css';

interface IndustryThumbnailRailProps {
  sectors: IndustrySector[];
  activeIndex: number;
  onSelectSector: (index: number) => void;
}

export const IndustryThumbnailRail: React.FC<IndustryThumbnailRailProps> = ({
  sectors,
  activeIndex,
  onSelectSector,
}) => {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [activeIndex]);

  return (
    <nav className={styles.railContainer} aria-label="Navegação rápida por setores">
      <div className={styles.railList}>
        {sectors.map((sector, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={sector.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              type="button"
              className={[
                styles.thumbItem,
                isActive ? styles.thumbItemActive : '',
              ].filter(Boolean).join(' ')}
              onClick={() => onSelectSector(index)}
              aria-current={isActive ? 'true' : undefined}
              aria-label={`Ir para setor ${sector.number}: ${sector.name}`}
            >
              {/* Active Orange Indicator Bar */}
              <span className={styles.activeBar} aria-hidden="true" />

              {/* Thumbnail Visual Window */}
              <div className={styles.thumbImageFrame}>
                <img
                  src={sector.image}
                  alt=""
                  className={styles.thumbImage}
                  loading="lazy"
                />
                <div className={styles.thumbOverlay} />
              </div>

              {/* Label & Number */}
              <div className={styles.thumbTextWrapper}>
                <span className={styles.thumbNumber}>{sector.number}</span>
                <span className={styles.thumbName}>{sector.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
