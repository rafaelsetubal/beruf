import React from 'react';
import { Container } from '../../components/ui/Container';
import { MediaFrame } from '../../components/media/MediaFrame';
import { EditorialPlate } from '../../components/media/Placeholder/EditorialPlate';
import { ArrowRightIcon } from '../../assets/icons';
import styles from './BrandDna.module.css';

export const BrandDna: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>

      {/* ==========================================================================
          BLOCO 01 — HERO (REAL CABLE EDITORIAL INTEGRATION)
          ========================================================================== */}
      <section className={styles.heroBlock} data-theme="cream">
        <Container maxWidth="2xl">
          <div className={styles.editorialRow}>
            {/* Left Marginalia */}
            <aside className={styles.marginalia} aria-hidden="true">
              <span className={styles.marginaliaIndex}>01</span>
              <span className={styles.marginaliaLine} />
              <span className={styles.marginaliaText}>ENGENHARIA REAL</span>
            </aside>

            {/* Editorial Content */}
            <div className={styles.editorialContent}>
              <div className={styles.heroGrid}>
                {/* Text Column */}
                <div>
                  <div className={styles.heroTag}>
                    <span className={styles.accentBar} />
                    <span>DESDE 1998</span>
                  </div>

                  <h1 className={styles.heroHeadline}>
                    TECNOLOGIA<br />
                    QUE MOVE<br />
                    A INDÚSTRIA.
                  </h1>

                  <p className={styles.heroSubcopy}>
                    CABOS ELÉTRICOS ESPECIAIS PARA AMBIENTES EXTREMOS.
                  </p>

                  <a href="#bloco-03" className={styles.editorialCtaLink}>
                    <span>CONHEÇA A BERUF</span>
                    <ArrowRightIcon size={16} />
                  </a>
                </div>

                {/* Media Column: Real Cable Asset (Large Editorial Piece) */}
                <div className={styles.heroMediaWrapper}>
                  <div className={styles.heroImageFrame}>
                    <img
                      src="/src/assets/images/beruf-cable-hero.png"
                      alt="Cabo industrial BERUF com condutores de cobre e blindagem expostos"
                      className={styles.heroImage}
                      loading="eager"
                      fetchPriority="high"
                    />
                    <div className={styles.heroImageBadge}>
                      CABO DE MOVIMENTO CONTÍNUO // BERUF SPEC
                    </div>
                  </div>

                  <span className={styles.sideQuote}>
                    MAIS DESEMPENHO PARA UM MUNDO REAL.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================================================
          BLOCO 02 — CREAM / QUIET STATEMENT (RESPIRO & ESPAÇO NEGATIVO)
          ========================================================================== */}
      <section className={styles.quietBlock} data-theme="cream">
        <Container maxWidth="2xl">
          <div className={styles.editorialRow}>
            {/* Left Marginalia */}
            <aside className={styles.marginalia} aria-hidden="true">
              <span className={styles.marginaliaIndex}>02</span>
              <span className={styles.marginaliaLine} />
              <span className={styles.marginaliaText}>ESSÊNCIA</span>
            </aside>

            {/* Quiet Statement Content */}
            <div className={styles.editorialContent}>
              <div className={styles.quietStatementWrapper}>
                <span className={styles.quietTag}>
                  <span className={styles.accentBar} />
                  NOSSA ESSÊNCIA
                </span>

                <blockquote className={styles.quietHeadline}>
                  Conexões para ambientes onde não existe espaço para falhar.
                </blockquote>

                <div className={styles.quietMeta}>
                  <span>ENERGIA</span>
                  <span>—</span>
                  <span>MOVIMENTO</span>
                  <span>—</span>
                  <span>SEGURANÇA</span>
                  <span>—</span>
                  <span>CONTINUIDADE</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================================================
          BLOCO 03 — PRODUCT COMPOSITION (MACRO CLOSE-UP & EDITORIAL DATA)
          ========================================================================== */}
      <section id="bloco-03" className={styles.productBlock} data-theme="cream">
        <Container maxWidth="2xl">
          <div className={styles.editorialRow}>
            {/* Left Marginalia */}
            <aside className={styles.marginalia} aria-hidden="true">
              <span className={styles.marginaliaIndex}>03</span>
              <span className={styles.marginaliaLine} />
              <span className={styles.marginaliaText}>DETALHE TÉCNICO</span>
            </aside>

            {/* Product Composition */}
            <div className={styles.editorialContent}>
              <div className={styles.productLayout}>
                {/* Media Side: Macro Product Enquadramento */}
                <div className={styles.productMediaWrap}>
                  <div className={styles.productImageFrame}>
                    <img
                      src="/src/assets/images/beruf-cable-core.png"
                      alt="Macro fotografia dos condutores de cobre e blindagem metálica BERUF"
                      className={styles.productImage}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Editorial Data (No card grid, clean typography) */}
                <div>
                  <div className={styles.productTag}>
                    <span className={styles.accentBar} />
                    CABOS ESPECIAIS
                  </div>

                  <h2 className={styles.productHeadline}>
                    PRECISÃO EM MOVIMENTO.
                  </h2>

                  <p className={styles.productDesc}>
                    Soluções desenvolvidas para condições extremas de temperatura,
                    movimento contínuo e elevada solicitação mecânica.
                  </p>

                  <div className={styles.specsTable}>
                    <div className={styles.specItem}>
                      <span className={styles.specKey}>APLICAÇÃO</span>
                      <span className={styles.specVal}>MOVIMENTO CONTÍNUO</span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specKey}>CICLOS</span>
                      <span className={styles.specVal}>10M+ CICLOS HOMOLOGADOS</span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specKey}>CONSTRUÇÃO</span>
                      <span className={styles.specVal}>INDUSTRIAL BLINDADA</span>
                    </div>
                  </div>

                  <a href="#bloco-06" className={styles.editorialCtaLink}>
                    <span>EXPLORAR PRODUTOS</span>
                    <ArrowRightIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================================================
          BLOCO 04 — ENERGY TRANSITION (THEME: ORANGE)
          ========================================================================== */}
      <section className={styles.orangeBlock} data-theme="orange">
        <Container maxWidth="2xl">
          <div className={styles.editorialRow}>
            {/* Left Marginalia */}
            <aside className={styles.marginalia} aria-hidden="true" style={{ color: 'rgba(12, 13, 14, 0.7)' }}>
              <span className={styles.marginaliaIndex} style={{ color: '#0C0D0E' }}>04</span>
              <span className={styles.marginaliaLine} style={{ backgroundColor: 'rgba(12, 13, 14, 0.25)' }} />
              <span className={styles.marginaliaText} style={{ color: 'rgba(12, 13, 14, 0.8)' }}>
                ENERGIA DE TRANSIÇÃO
              </span>
            </aside>

            {/* Orange Content */}
            <div className={styles.editorialContent}>
              <div className={styles.orangeContent}>
                <h2 className={styles.orangeHeadline}>
                  FEITO PARA<br />
                  NÃO PARAR.
                </h2>

                <div className={styles.orangeSide}>
                  <p className={styles.orangeSubcopy}>
                    SOLUÇÕES QUE MANTÊM O MUNDO EM MOVIMENTO.
                  </p>

                  {/* Minimal subtle circular CTA (restrained, optional) */}
                  <a
                    href="#bloco-05"
                    className={styles.orangeCtaBtn}
                    aria-label="Avançar para Aplicações Industriais"
                    title="Avançar"
                  >
                    <ArrowRightIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================================================
          BLOCO 05 — TECHNICAL IMMERSION (THEME: BLACK)
          ========================================================================== */}
      <section id="bloco-05" className={styles.blackBlock} data-theme="black">
        <Container maxWidth="2xl">
          <div className={styles.editorialRow}>
            {/* Left Marginalia */}
            <aside className={styles.marginalia} aria-hidden="true">
              <span className={styles.marginaliaIndex} style={{ color: '#FFFFFF' }}>05</span>
              <span className={styles.marginaliaLine} style={{ backgroundColor: '#282A30' }} />
              <span className={styles.marginaliaText}>IMERSÃO INDUSTRIAL</span>
            </aside>

            {/* Black Content */}
            <div className={styles.editorialContent}>
              <div className={styles.heroTag} style={{ color: 'var(--color-brand-orange)' }}>
                <span className={styles.accentBar} />
                <span>APLICAÇÕES</span>
              </div>

              <h2 className={styles.blackHeadline}>
                ENERGIA.<br />
                MOVIMENTO.<br />
                CONTROLE.
              </h2>

              {/* Large Cinematic Media Frame with subtle EditorialPlate */}
              <MediaFrame
                title="SISTEMAS INTEGRADOS EM LINHA AUTOMOTIVA"
                tag="APLICAÇÃO_05"
                footerInfo="ROBÔS ARTICULADOS • TRANSMISSÃO DE DADOS & POTÊNCIA"
                status="CAMPO REAL"
                theme="black"
              >
                <div style={{ position: 'relative', aspectRatio: '21/9', width: '100%' }}>
                  <EditorialPlate
                    label="OPERAÇÃO EM AMBIENTE INDUSTRIAL SEVERO"
                    meta="CGI / FOTOGRAFIA CINEMATOGRÁFICA • 21:9 WIDE"
                    variant="dark"
                    ratioText="21:9 CINEMATIC"
                  />
                </div>
              </MediaFrame>

              {/* Editorial Technical Markers (No cards, pure typography) */}
              <div className={styles.blackTags}>
                <span className={styles.blackTagItem}>AUTOMAÇÃO</span>
                <span className={styles.blackTagItem}>ROBÓTICA</span>
                <span className={styles.blackTagItem}>INDÚSTRIA</span>
                <span className={styles.blackTagItem}>MOVIMENTO CONTÍNUO</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================================================
          BLOCO 06 — BRAND CLOSING (THEME: CREAM)
          ========================================================================== */}
      <section id="bloco-06" className={styles.closingBlock} data-theme="cream">
        <Container maxWidth="2xl">
          <div className={styles.editorialRow}>
            {/* Left Marginalia */}
            <aside className={styles.marginalia} aria-hidden="true">
              <span className={styles.marginaliaIndex}>06</span>
              <span className={styles.marginaliaLine} />
              <span className={styles.marginaliaText}>FECHAMENTO</span>
            </aside>

            {/* Closing Content */}
            <div className={styles.editorialContent}>
              <div className={styles.closingGrid}>
                {/* Left: Brand Monolith */}
                <div>
                  <h2 className={styles.brandSignature}>
                    BERUF<br />
                    BRASIL<br />
                    <span style={{ color: 'var(--color-brand-orange)', fontSize: '0.45em', letterSpacing: '0.12em', fontFamily: 'var(--font-mono)' }}>
                      DESDE 1998
                    </span>
                  </h2>
                </div>

                {/* Right: Closing Statement & CTA */}
                <div className={styles.closingRight}>
                  <p className={styles.closingStatement}>
                    TECNOLOGIA PARA A INDÚSTRIA QUE NÃO PODE PARAR.
                  </p>

                  <a href="/" className={styles.editorialCtaLink}>
                    <span>EXPLORAR BERUF</span>
                    <ArrowRightIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================================================
          HEADLINE TEST COMPARATOR (FINAL SECTION)
          ========================================================================== */}
      <section className={styles.testBlock}>
        <Container maxWidth="2xl">
          <div className={styles.testContainer}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-brand-orange)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                LABORATÓRIO TIPOGRÁFICO // FASE 01.6
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, marginTop: 4, marginBottom: 6 }}>
                Headline Test: "TECNOLOGIA QUE MOVE A INDÚSTRIA."
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', maxWidth: 640 }}>
                Avaliação visual das 3 fontes sob a mesma headline em composição real.
                A página acima utiliza rigorosamente o padrão atual (Barlow Semi Condensed).
              </p>
            </div>

            {/* Test 1: Barlow Semi Condensed */}
            <div className={styles.testRow}>
              <div className={styles.testLabel}>
                <span style={{ fontWeight: 600 }}>01. BARLOW SEMI CONDENSED</span>
                <span style={{ background: 'var(--color-brand-orange)', color: '#000', padding: '2px 6px', borderRadius: 2, fontWeight: 700 }}>
                  PADRÃO ATUAL
                </span>
              </div>
              <div className={styles.testSample} style={{ fontFamily: 'var(--font-barlow)' }}>
                TECNOLOGIA QUE MOVE A INDÚSTRIA.
              </div>
            </div>

            {/* Test 2: Syne */}
            <div className={styles.testRow}>
              <div className={styles.testLabel}>
                <span style={{ fontWeight: 600 }}>02. SYNE</span>
                <span>EDITORIAL CONTEMPORÂNEO</span>
              </div>
              <div className={styles.testSample} style={{ fontFamily: 'var(--font-syne)' }}>
                TECNOLOGIA QUE MOVE A INDÚSTRIA.
              </div>
            </div>

            {/* Test 3: Space Grotesk */}
            <div className={styles.testRow}>
              <div className={styles.testLabel}>
                <span style={{ fontWeight: 600 }}>03. SPACE GROTESK</span>
                <span>MECÂNICA / INK-TRAPS</span>
              </div>
              <div className={styles.testSample} style={{ fontFamily: 'var(--font-space)' }}>
                TECNOLOGIA QUE MOVE A INDÚSTRIA.
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
