import React from 'react';
import { Container } from '../../components/ui/Container';
import { ArrowRightIcon } from '../../assets/icons';
import styles from './TypeLab.module.css';

interface TypeVariation {
  id: string;
  number: string;
  name: string;
  fontClass: string;
  family: string;
  weight: string;
  notes: string;
}

const VARIATIONS: TypeVariation[] = [
  {
    id: 'type-01',
    number: '01',
    name: 'SPACE GROTESK 500',
    fontClass: styles.fontSpace500,
    family: 'Space Grotesk',
    weight: '500 (Medium)',
    notes: 'Precisão mecânica com ink-traps técnicos discretos. Rigor de alta engenharia.',
  },
  {
    id: 'type-02',
    number: '02',
    name: 'URBANIST 400',
    fontClass: styles.fontUrbanist400,
    family: 'Urbanist',
    weight: '400 (Regular)',
    notes: 'Geometria contemporânea aerodinâmica e leve. Sofisticação editorial pura.',
  },
  {
    id: 'type-03',
    number: '03',
    name: 'URBANIST 500',
    fontClass: styles.fontUrbanist500,
    family: 'Urbanist',
    weight: '500 (Medium)',
    notes: 'Equilíbrio exato de espessura e abertura ótica. Elegância premium internacional.',
  },
  {
    id: 'type-04',
    number: '04',
    name: 'URBANIST 600',
    fontClass: styles.fontUrbanist600,
    family: 'Urbanist',
    weight: '600 (SemiBold)',
    notes: 'Presença e autoridade geométrica sem peso militar ou de sinalização pesada.',
  },
  {
    id: 'type-05',
    number: '05',
    name: 'PLUS JAKARTA SANS 500',
    fontClass: styles.fontJakarta500,
    family: 'Plus Jakarta Sans',
    weight: '500 (Medium)',
    notes: 'Rigor e precisão suíça contemporânea. Harmonia total entre headline e corpo.',
  },
  {
    id: 'type-06',
    number: '06',
    name: 'BARLOW NORMAL 500',
    fontClass: styles.fontBarlowNormal500,
    family: 'Barlow (Normal)',
    weight: '500 (Medium)',
    notes: 'Versão regular da família Barlow (sem a condensação excessiva). Neutra e técnica.',
  },
];

export const TypeLab: React.FC = () => {
  return (
    <div className={styles.pageWrapper} data-theme="cream">
      {/* Header Context */}
      <header className={styles.labHeader}>
        <Container maxWidth="2xl">
          <div className={styles.labTag}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-brand-orange)' }} />
            <span>FASE 02.0 // LABORATÓRIO TIPOGRÁFICO DE HERO</span>
          </div>

          <h1 className={styles.labTitle}>
            Decisão Tipográfica — Comparação Real de Hero
          </h1>

          <p className={styles.labDesc}>
            O impacto visual deve emergir de <strong>escala, espaçamento, composição e contraste</strong>,
            e não de um peso de fonte excessivo (pesos 700+ e condensadas pesadas foram excluídos).
            Abaixo, o Hero real da BERUF é renderizado 6 vezes com métricas e assets 100% idênticos,
            variando exclusivamente a família e o peso tipográfico.
          </p>
        </Container>
      </header>

      {/* Quick Jump Bar */}
      <div className={styles.stickyJumpBar}>
        <Container maxWidth="2xl">
          <nav className={styles.jumpLinks} aria-label="Pular para variação tipográfica">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginRight: 6 }}>
              SALTAR PARA:
            </span>
            {VARIATIONS.map((v) => (
              <a key={v.id} href={`#${v.id}`} className={styles.jumpLink}>
                {v.number} {v.name}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* The 6 Heroes Rendered Vertically */}
      <main>
        {VARIATIONS.map((v) => (
          <section key={v.id} id={v.id} className={styles.heroInstance}>
            <Container maxWidth="2xl">
              {/* Technical Identifier Header */}
              <div className={styles.instanceIdentifierBar}>
                <div className={styles.identifierText}>
                  {v.number} — {v.name}
                </div>
                <div className={styles.identifierMeta}>
                  {v.family} • {v.weight} — {v.notes}
                </div>
              </div>

              {/* Strict Hero Composition */}
              <div className={styles.heroGrid}>
                {/* Text Column */}
                <div>
                  <div className={styles.heroTag}>
                    <span className={styles.accentBar} />
                    <span>DESDE 1998</span>
                  </div>

                  {/* The Variable Headline */}
                  <h2 className={[styles.headlineCommon, v.fontClass].join(' ')}>
                    TECNOLOGIA<br />
                    QUE MOVE<br />
                    A INDÚSTRIA.
                  </h2>

                  {/* Subcopy */}
                  <p className={styles.subcopyCommon}>
                    CABOS ELÉTRICOS ESPECIAIS PARA AMBIENTES EXTREMOS.
                  </p>

                  {/* CTA */}
                  <a href="#bloco-03" className={styles.ctaLink}>
                    <span>CONHEÇA A BERUF</span>
                    <ArrowRightIcon size={16} />
                  </a>
                </div>

                {/* Media Column (Same exact asset and framing across all) */}
                <div className={styles.heroMediaWrapper}>
                  <div className={styles.heroImageFrame}>
                    <img
                      src="/src/assets/images/beruf-cable-hero.png"
                      alt="Cabo industrial BERUF com condutores de cobre e blindagem expostos"
                      className={styles.heroImage}
                      loading="lazy"
                    />
                    <div className={styles.heroImageBadge}>
                      CABO DE MOVIMENTO CONTÍNUO // BERUF SPEC
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </main>
    </div>
  );
};
