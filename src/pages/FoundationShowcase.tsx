import React, { useState, useEffect } from 'react';
import { useTheme } from '../design-system/theme';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Grid, Col } from '../components/ui/Grid';
import { Stack } from '../components/ui/Stack';
import { Text } from '../components/ui/Text';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';
import { Link } from '../components/ui/Link';
import { Divider } from '../components/ui/Divider';
import { IconButton } from '../components/ui/IconButton';
import { Image, Video, MediaFrame } from '../components/media';
import { Reveal, TextReveal, ImageReveal, MaskReveal } from '../components/motion';
import {
  ArrowRightIcon,
  ZapIcon,
  PlayIcon,
  SlidersIcon,
} from '../assets/icons';
import styles from './FoundationShowcase.module.css';

export const FoundationShowcase: React.FC = () => {
  const { theme, setTheme } = useTheme();

  // Typography comparator state (can switch view: all 3 side-by-side or single focus)
  const [activeTab, setActiveTab] = useState<'all' | 'barlow' | 'syne' | 'space'>('all');

  // Motion interactive tester state
  const [selectedDuration, setSelectedDuration] = useState('base');
  const [selectedEase, setSelectedEase] = useState('expo');
  const [isAnimating, setIsAnimating] = useState(false);

  // Responsive breakpoint detector
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = (width: number) => {
    if (width >= 1440) return { name: '2XL (Wide)', cols: 12, max: '1440px' };
    if (width >= 1280) return { name: 'XL (Desktop)', cols: 12, max: '1280px' };
    if (width >= 1024) return { name: 'LG (Laptop)', cols: 12, max: '1024px' };
    if (width >= 768) return { name: 'MD (Tablet)', cols: 8, max: '768px' };
    return { name: 'SM (Mobile)', cols: 4, max: '100%' };
  };

  const bp = getBreakpoint(windowWidth);

  const durationMap: Record<string, string> = {
    // UI
    micro: '100ms',
    fast: '150ms',
    base: '250ms',
    slow: '400ms',
    // Editorial
    editorial: '600ms',
    reveal: '800ms',
    image: '1000ms',
    // Cinematic
    cinematic: '1400ms',
    hero: '1800ms',
    section: '2200ms',
  };

  const easeMap: Record<string, string> = {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    cinematic: 'cubic-bezier(0.25, 1, 0.5, 1)',
    expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const triggerMotionTest = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2400);
  };

  return (
    <div style={{ paddingBottom: 'var(--space-24)' }}>
      {/* Hero / System Header */}
      <section className={styles.hero}>
        <Container maxWidth="2xl">
          <div className={styles.heroTag}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-brand-orange)' }} />
            <span>FASE 01 REVISADA // FOUNDATION & DESIGN SYSTEM</span>
          </div>

          <Heading level="display" className={styles.heroTitle}>
            Fundação Técnica & Visual da BERUF Brasil
          </Heading>

          <Text size="lg" tone="secondary" className={styles.heroLead}>
            Arquitetura de produção para o novo portal institucional da BERUF.
            CSS baseado em design tokens puros, 3 temas semânticos, comparador tipográfico industrial,
            fundação de mídia desacoplada e infraestrutura motion pronta para GSAP.
          </Text>

          {/* Quick Stats Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-6)',
              marginTop: 'var(--space-8)',
              padding: 'var(--space-4) var(--space-6)',
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
            }}
          >
            <div>
              <span style={{ color: 'var(--color-text-muted)' }}>VIEWPORT ATUAL: </span>
              <strong style={{ color: 'var(--color-accent)' }}>{windowWidth}px ({bp.name})</strong>
            </div>
            <Divider orientation="vertical" />
            <div>
              <span style={{ color: 'var(--color-text-muted)' }}>GRID COLUNAS: </span>
              <strong>{bp.cols} COLUNAS ATIVAS</strong>
            </div>
            <Divider orientation="vertical" />
            <div>
              <span style={{ color: 'var(--color-text-muted)' }}>TEMA GLOBAL: </span>
              <strong style={{ textTransform: 'uppercase', color: 'var(--color-accent)' }}>{theme}</strong>
            </div>
            <Divider orientation="vertical" />
            <div>
              <span style={{ color: 'var(--color-text-muted)' }}>STATUS: </span>
              <strong style={{ color: 'var(--color-system-success)' }}>● FOUNDATION READY</strong>
            </div>
          </div>
        </Container>
      </section>

      {/* 01. THEMES DEMO */}
      <Section id="themes" spacing="regular" borderBottom>
        <Container maxWidth="2xl">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>01 // SISTEMA DE TEMAS</div>
            <Heading level="h2" className={styles.sectionTitle}>
              Três Modos Semânticos: Cream, Black & Orange
            </Heading>
            <Text tone="secondary" className={styles.sectionDesc}>
              Construído sobre CSS variables com transição suave. O Laranja BERUF funciona como cor de energia, interação e transição, sem poluição visual.
            </Text>
          </div>

          <div className={styles.themePreviewRow}>
            {/* Cream Card */}
            <div className={styles.themeCard} data-theme="cream" style={{ backgroundColor: 'var(--color-bg-base)', color: 'var(--color-text-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>Cream (Default)</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', padding: '2px 6px', background: 'var(--color-border)', borderRadius: 2 }}>
                  EDITORIAL
                </span>
              </div>
              <Text size="sm" tone="secondary">
                Fundo quente off-white (#FBF9F5), tipografia carvão (#111113) e detalhes em Laranja BERUF. Máximo respiro e sofisticação editorial.
              </Text>
              <Button variant="primary" size="sm" onClick={() => setTheme('cream')} fullWidth>
                {theme === 'cream' ? 'Tema Ativo' : 'Ativar Tema Cream'}
              </Button>
            </div>

            {/* Black Card */}
            <div className={styles.themeCard} data-theme="black" style={{ backgroundColor: 'var(--color-bg-base)', color: 'var(--color-text-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>Black</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', padding: '2px 6px', background: 'var(--color-border)', borderRadius: 2 }}>
                  INDUSTRIAL
                </span>
              </div>
              <Text size="sm" tone="secondary">
                Fundo preto técnico (#0C0D0E), superfícies carvão e acentos luminescentes em Laranja BERUF. Alta precisão e foco de engenharia.
              </Text>
              <Button variant="primary" size="sm" onClick={() => setTheme('black')} fullWidth>
                {theme === 'black' ? 'Tema Ativo' : 'Ativar Tema Black'}
              </Button>
            </div>

            {/* Orange Card */}
            <div className={styles.themeCard} data-theme="orange" style={{ backgroundColor: 'var(--color-bg-base)', color: 'var(--color-text-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>Orange</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', padding: '2px 6px', background: 'var(--color-border)', borderRadius: 2 }}>
                  ENERGY
                </span>
              </div>
              <Text size="sm" tone="secondary">
                Fundo no Laranja oficial BERUF (#FF8F1C) com tipografia industrial preta de altíssimo contraste. Utilizado para impacto e transições.
              </Text>
              <Button variant="primary" size="sm" onClick={() => setTheme('orange')} fullWidth>
                {theme === 'orange' ? 'Tema Ativo' : 'Ativar Tema Orange'}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02. TYPOGRAPHY COMPARATOR */}
      <Section id="typography" spacing="regular" borderBottom>
        <Container maxWidth="2xl">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>02 // TIPOGRAFIA & COMPARADOR VISUAL</div>
            <Heading level="h2" className={styles.sectionTitle}>
              Comparador Lado a Lado: Barlow vs Syne vs Space Grotesk
            </Heading>
            <Text tone="secondary" className={styles.sectionDesc}>
              A opção padrão é <strong>Barlow Semi Condensed</strong> (engenharia e rigor mecânico). Compare lado a lado com <strong>Syne</strong> (editorial avant-garde) e <strong>Space Grotesk</strong> (ink-traps técnicos) sob exatamente as mesmas métricas.
            </Text>
          </div>

          {/* Tab Filter */}
          <div className={styles.comparatorControls}>
            <button
              className={[styles.comparatorTab, activeTab === 'all' ? styles.comparatorTabActive : ''].join(' ')}
              onClick={() => setActiveTab('all')}
            >
              Exibir Todas Lado a Lado (3 Colunas)
            </button>
            <button
              className={[styles.comparatorTab, activeTab === 'barlow' ? styles.comparatorTabActive : ''].join(' ')}
              onClick={() => setActiveTab('barlow')}
            >
              Barlow Semi Condensed (Padrão Atual)
            </button>
            <button
              className={[styles.comparatorTab, activeTab === 'syne' ? styles.comparatorTabActive : ''].join(' ')}
              onClick={() => setActiveTab('syne')}
            >
              Syne (Opção Editorial)
            </button>
            <button
              className={[styles.comparatorTab, activeTab === 'space' ? styles.comparatorTabActive : ''].join(' ')}
              onClick={() => setActiveTab('space')}
            >
              Space Grotesk (Opção Técnica)
            </button>
          </div>

          {/* Comparator Grid */}
          <div
            className={styles.comparatorGrid}
            style={{
              gridTemplateColumns: activeTab === 'all' ? undefined : '1fr',
            }}
          >
            {/* 1. Barlow Semi Condensed */}
            {(activeTab === 'all' || activeTab === 'barlow') && (
              <div className={styles.fontCard}>
                <div className={styles.fontCardHeader}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.375rem', fontWeight: 700 }}>
                      Barlow Semi Condensed
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                      Inspirada em sinalização e engenharia industrial
                    </span>
                  </div>
                  <span className={styles.fontBadgeDefault}>PADRÃO ATUAL</span>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Display (Fluid Scale)</span>
                  <div style={{ fontFamily: 'var(--font-barlow)', fontSize: 'var(--text-display)', lineHeight: 'var(--leading-tight)', fontWeight: 800 }}>
                    AUTOMAÇÃO
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H1 Headline</span>
                  <div style={{ fontFamily: 'var(--font-barlow)', fontSize: 'var(--text-h1)', lineHeight: 'var(--leading-tight)', fontWeight: 700 }}>
                    Soluções em cabos elétricos especiais e robótica industrial
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H2 Sub-headline</span>
                  <div style={{ fontFamily: 'var(--font-barlow)', fontSize: 'var(--text-h2)', lineHeight: 'var(--leading-tight)', fontWeight: 700 }}>
                    Esteiras porta-cabos para aplicações severas
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H3 Seção Técnica</span>
                  <div style={{ fontFamily: 'var(--font-barlow)', fontSize: 'var(--text-h3)', lineHeight: 'var(--leading-snug)', fontWeight: 600 }}>
                    Capacidade para mais de 10 milhões de ciclos contínuos
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Body Text (Plus Jakarta Sans)</span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
                    Desde 1998, a BERUF desenvolve cabos especiais e sistemas mecânicos com garantia de continuidade operacional para a indústria pesada.
                  </p>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Labels & Microcópia</span>
                  <div style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    CABO DE FORÇA E CONTROLE // IEC 60332-1
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Números Técnicos (JetBrains Mono)</span>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-accent)' }}>
                    4x 2.5 mm² • 600/1000V • -40°C A +90°C • 10.000.000 CYCLES
                  </div>
                </div>
              </div>
            )}

            {/* 2. Syne */}
            {(activeTab === 'all' || activeTab === 'syne') && (
              <div className={styles.fontCard}>
                <div className={styles.fontCardHeader}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.375rem', fontWeight: 700 }}>
                      Syne
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                      Editorial avant-garde & contraste contemporâneo
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', padding: '2px 6px', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 2 }}>
                    CANDIDATA 02
                  </span>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Display (Fluid Scale)</span>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: 'var(--text-display)', lineHeight: 'var(--leading-tight)', fontWeight: 800 }}>
                    AUTOMAÇÃO
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H1 Headline</span>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: 'var(--text-h1)', lineHeight: 'var(--leading-tight)', fontWeight: 700 }}>
                    Soluções em cabos elétricos especiais e robótica industrial
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H2 Sub-headline</span>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: 'var(--text-h2)', lineHeight: 'var(--leading-tight)', fontWeight: 700 }}>
                    Esteiras porta-cabos para aplicações severas
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H3 Seção Técnica</span>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: 'var(--text-h3)', lineHeight: 'var(--leading-snug)', fontWeight: 600 }}>
                    Capacidade para mais de 10 milhões de ciclos contínuos
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Body Text (Plus Jakarta Sans)</span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
                    Desde 1998, a BERUF desenvolve cabos especiais e sistemas mecânicos com garantia de continuidade operacional para a indústria pesada.
                  </p>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Labels & Microcópia</span>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    CABO DE FORÇA E CONTROLE // IEC 60332-1
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Números Técnicos (JetBrains Mono)</span>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-accent)' }}>
                    4x 2.5 mm² • 600/1000V • -40°C A +90°C • 10.000.000 CYCLES
                  </div>
                </div>
              </div>
            )}

            {/* 3. Space Grotesk */}
            {(activeTab === 'all' || activeTab === 'space') && (
              <div className={styles.fontCard}>
                <div className={styles.fontCardHeader}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '1.375rem', fontWeight: 700 }}>
                      Space Grotesk
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                      Ink-traps mecânicos & personalidade de engenharia
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', padding: '2px 6px', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 2 }}>
                    CANDIDATA 03
                  </span>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Display (Fluid Scale)</span>
                  <div style={{ fontFamily: 'var(--font-space)', fontSize: 'var(--text-display)', lineHeight: 'var(--leading-tight)', fontWeight: 700 }}>
                    AUTOMAÇÃO
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H1 Headline</span>
                  <div style={{ fontFamily: 'var(--font-space)', fontSize: 'var(--text-h1)', lineHeight: 'var(--leading-tight)', fontWeight: 700 }}>
                    Soluções em cabos elétricos especiais e robótica industrial
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H2 Sub-headline</span>
                  <div style={{ fontFamily: 'var(--font-space)', fontSize: 'var(--text-h2)', lineHeight: 'var(--leading-tight)', fontWeight: 700 }}>
                    Esteiras porta-cabos para aplicações severas
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>H3 Seção Técnica</span>
                  <div style={{ fontFamily: 'var(--font-space)', fontSize: 'var(--text-h3)', lineHeight: 'var(--leading-snug)', fontWeight: 600 }}>
                    Capacidade para mais de 10 milhões de ciclos contínuos
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Body Text (Plus Jakarta Sans)</span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
                    Desde 1998, a BERUF desenvolve cabos especiais e sistemas mecânicos com garantia de continuidade operacional para a indústria pesada.
                  </p>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Labels & Microcópia</span>
                  <div style={{ fontFamily: 'var(--font-space)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    CABO DE FORÇA E CONTROLE // IEC 60332-1
                  </div>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Números Técnicos (JetBrains Mono)</span>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-accent)' }}>
                    4x 2.5 mm² • 600/1000V • -40°C A +90°C • 10.000.000 CYCLES
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* 03. COLOR SYSTEM */}
      <Section id="colors" spacing="regular" borderBottom>
        <Container maxWidth="2xl">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>03 // SISTEMA DE CORES</div>
            <Heading level="h2" className={styles.sectionTitle}>
              Tokens Específicos da Família Laranja BERUF
            </Heading>
            <Text tone="secondary" className={styles.sectionDesc}>
              O Laranja Oficial <strong>#FF8F1C</strong> (extraído diretamente da marca oficial) foi segmentado em tokens especializados para garantir consistência tátil e acessibilidade.
            </Text>
          </div>

          <div className={styles.swatchGrid}>
            {/* brand-orange */}
            <div className={styles.swatchCard}>
              <div className={styles.swatchColor} style={{ backgroundColor: '#FF8F1C' }}>
                <span style={{ background: '#000', color: '#fff', fontSize: '0.625rem', padding: '2px 4px', borderRadius: 2 }}>OFFICIAL</span>
              </div>
              <div className={styles.swatchInfo}>
                <div className={styles.swatchName}>brand-orange</div>
                <div className={styles.swatchHex}>#FF8F1C</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginTop: 4 }}>Identidade oficial BERUF</div>
              </div>
            </div>

            {/* experience-orange */}
            <div className={styles.swatchCard}>
              <div className={styles.swatchColor} style={{ backgroundColor: '#FF7500' }}>
                <span style={{ background: '#000', color: '#fff', fontSize: '0.625rem', padding: '2px 4px', borderRadius: 2 }}>VIBRANT</span>
              </div>
              <div className={styles.swatchInfo}>
                <div className={styles.swatchName}>experience-orange</div>
                <div className={styles.swatchHex}>#FF7500</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginTop: 4 }}>Momentos interativos de energia</div>
              </div>
            </div>

            {/* orange-hover */}
            <div className={styles.swatchCard}>
              <div className={styles.swatchColor} style={{ backgroundColor: '#E67C10' }}>
                <span style={{ background: '#000', color: '#fff', fontSize: '0.625rem', padding: '2px 4px', borderRadius: 2 }}>HOVER</span>
              </div>
              <div className={styles.swatchInfo}>
                <div className={styles.swatchName}>orange-hover</div>
                <div className={styles.swatchHex}>#E67C10</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginTop: 4 }}>Estado de hover tátil</div>
              </div>
            </div>

            {/* orange-subtle */}
            <div className={styles.swatchCard}>
              <div className={styles.swatchColor} style={{ backgroundColor: 'rgba(255, 143, 28, 0.15)', borderBottom: '1px solid var(--color-border)' }}>
                <span style={{ background: 'var(--color-bg-base)', color: 'var(--color-text-primary)', fontSize: '0.625rem', padding: '2px 4px', borderRadius: 2 }}>12% TINT</span>
              </div>
              <div className={styles.swatchInfo}>
                <div className={styles.swatchName}>orange-subtle</div>
                <div className={styles.swatchHex}>rgba(255,143,28,0.12)</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginTop: 4 }}>Fundos sutis e halos técnicos</div>
              </div>
            </div>

            {/* orange-contrast */}
            <div className={styles.swatchCard}>
              <div className={styles.swatchColor} style={{ backgroundColor: '#0C0D0E' }}>
                <span style={{ background: '#FF8F1C', color: '#000', fontSize: '0.625rem', padding: '2px 4px', borderRadius: 2, fontWeight: 700 }}>CONTRAST</span>
              </div>
              <div className={styles.swatchInfo}>
                <div className={styles.swatchName}>orange-contrast</div>
                <div className={styles.swatchHex}>#0C0D0E</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginTop: 4 }}>Texto legível sobre o laranja</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 04. GRID & RESPONSIVENESS */}
      <Section id="grid" spacing="regular" borderBottom>
        <Container maxWidth="2xl">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>04 // GRID RESPONSIVO & ALINHAMENTO</div>
            <Heading level="h2" className={styles.sectionTitle}>
              Sistema 12 (Desktop) / 8 (Tablet) / 4 (Mobile)
            </Heading>
            <Text tone="secondary" className={styles.sectionDesc}>
              O layout adapta-se de forma estrita aos dispositivos sem apenas comprimir elementos. Redimensione a janela para observar a transição dinâmica.
            </Text>
          </div>

          <div className={styles.gridVisualizer}>
            {Array.from({ length: bp.cols }).map((_, i) => (
              <div key={i} className={styles.gridColBox}>
                <span>COL {i + 1}</span>
                <span style={{ fontSize: '0.625rem', opacity: 0.7 }}>{(100 / bp.cols).toFixed(1)}%</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <Text size="sm" tone="muted">
              Exemplo de distribuição responsiva com componentes Grid e Col:
            </Text>
            <Grid gap="md" style={{ marginTop: 'var(--space-3)' }}>
              <Col span={4} md={4} lg={3}>
                <div style={{ padding: 'var(--space-4)', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  <Text size="mono" tone="accent">COL LG=3 // MD=4 // SM=4</Text>
                  <Text size="sm">Módulo 01: Potência</Text>
                </div>
              </Col>
              <Col span={4} md={4} lg={3}>
                <div style={{ padding: 'var(--space-4)', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  <Text size="mono" tone="accent">COL LG=3 // MD=4 // SM=4</Text>
                  <Text size="sm">Módulo 02: Robótica</Text>
                </div>
              </Col>
              <Col span={4} md={8} lg={6}>
                <div style={{ padding: 'var(--space-4)', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  <Text size="mono" tone="accent">COL LG=6 // MD=8 // SM=4</Text>
                  <Text size="sm">Módulo 03: Centro de Ensaios e Testes Mecânicos</Text>
                </div>
              </Col>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* 05. SPACING SYSTEM */}
      <Section id="spacing" spacing="regular" borderBottom>
        <Container maxWidth="2xl">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>05 // RÉGUA DE ESPAÇAMENTO</div>
            <Heading level="h2" className={styles.sectionTitle}>
              Escala Modular de 4px / 8px & Espaçamentos de Seção
            </Heading>
            <Text tone="secondary" className={styles.sectionDesc}>
              Espaço negativo generoso com ritmo matemático para dar presença e peso editorial.
            </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {[
              { token: '--space-1', px: '4px', label: 'Micro ajuste / badges' },
              { token: '--space-2', px: '8px', label: 'Espaçamento interno compacto' },
              { token: '--space-4', px: '16px', label: 'Gutter mobile / botões' },
              { token: '--space-6', px: '24px', label: 'Padding padrão de cards' },
              { token: '--space-8', px: '32px', label: 'Margem de tablet / gaps amplos' },
              { token: '--space-12', px: '48px', label: 'Margem desktop / títulos' },
              { token: '--space-16', px: '64px', label: 'Seções compactas' },
              { token: '--space-24', px: '96px', label: 'Seções regulares editoriais' },
            ].map((item) => (
              <div
                key={item.token}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  padding: '6px 12px',
                  background: 'var(--color-bg-surface)',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', width: 100, color: 'var(--color-accent)' }}>
                  {item.token}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', width: 60, color: 'var(--color-text-muted)' }}>
                  {item.px}
                </span>
                <div
                  style={{
                    height: 14,
                    width: item.px,
                    backgroundColor: 'var(--color-brand-orange)',
                    borderRadius: 2,
                    minWidth: 4,
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginLeft: 'auto' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 06. BUTTONS & ACTIONS */}
      <Section id="components" spacing="regular" borderBottom>
        <Container maxWidth="2xl">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>06 // BOTÕES & COMPONENTES TÁTEIS</div>
            <Heading level="h2" className={styles.sectionTitle}>
              Variantes, Estados e Links Editoriais
            </Heading>
            <Text tone="secondary" className={styles.sectionDesc}>
              Aparência mecânica, cantos industriais precisos (4px) e estados táteis bem definidos.
            </Text>
          </div>

          <Stack direction="column" gap={6}>
            {/* Variants row */}
            <div>
              <Text size="caption" tone="muted" style={{ marginBottom: 'var(--space-3)' }}>
                Variantes Principais:
              </Text>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center' }}>
                <Button variant="primary" suffixIcon={<ArrowRightIcon />}>
                  Primary Action
                </Button>
                <Button variant="energy" suffixIcon={<ZapIcon />}>
                  Energy Orange
                </Button>
                <Button variant="secondary">
                  Secondary
                </Button>
                <Button variant="outline">
                  Outline
                </Button>
                <Button variant="ghost">
                  Ghost Action
                </Button>
              </div>
            </div>

            {/* Sizes & States */}
            <div>
              <Text size="caption" tone="muted" style={{ marginBottom: 'var(--space-3)' }}>
                Tamanhos & Estados (Small, Medium, Large, Loading, Disabled):
              </Text>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center' }}>
                <Button size="sm" variant="primary">Small (34px)</Button>
                <Button size="md" variant="primary">Medium (44px)</Button>
                <Button size="lg" variant="primary">Large (52px)</Button>
                <Button size="md" variant="energy" isLoading>Processando</Button>
                <Button size="md" variant="outline" disabled>Desabilitado</Button>
                <IconButton aria-label="Ação rápida" variant="energy" rounded>
                  <ZapIcon size={18} />
                </IconButton>
                <IconButton aria-label="Configurações" variant="secondary">
                  <SlidersIcon size={18} />
                </IconButton>
              </div>
            </div>

            {/* Editorial Links */}
            <div>
              <Text size="caption" tone="muted" style={{ marginBottom: 'var(--space-3)' }}>
                Links Editoriais com Sublinhado Técnico:
              </Text>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', alignItems: 'center' }}>
                <Link href="#typography">Explorar Especificações de Cabos</Link>
                <Link href="#colors" tone="accent">Conhecer Diretrizes de Cor</Link>
                <Link href="https://beruf.com.br" isExternal>Acessar Portal Externo</Link>
              </div>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* 07. MEDIA FOUNDATION */}
      <Section id="media" spacing="regular" borderBottom>
        <Container maxWidth="2xl">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>07 // MEDIA FOUNDATION</div>
            <Heading level="h2" className={styles.sectionTitle}>
              Media, Image, Video & MediaFrame
            </Heading>
            <Text tone="secondary" className={styles.sectionDesc}>
              Componentes de mídia sem dependências de imagens externas. Utilizam placeholders arquitetônicos vetoriais, suportam múltiplos aspect ratios, overlays e molduras técnicas (MediaFrame).
            </Text>
          </div>

          <Grid gap="lg">
            {/* MediaFrame 16:9 */}
            <Col span={4} md={4} lg={6}>
              <MediaFrame
                title="CÉLULA ROBÓTICA KUKA // ENSAIO 04"
                tag="STREAM: 1080P"
                footerInfo="VELOCIDADE DE DESLOCAMENTO: 4.5 M/S • TENSÃO: 120N"
                status="OPERACIONAL"
              >
                <Image
                  alt="Ensaio de Esteira Porta-Cabos"
                  aspectRatio="16/9"
                  overlay="technical-grid"
                />
              </MediaFrame>
            </Col>

            {/* MediaFrame with Video Simulation */}
            <Col span={4} md={4} lg={6}>
              <MediaFrame
                title="FEEDBACK DE TORÇÃO EM CABO ROBÓTICO"
                tag="FORMATO: RAW 60FPS"
                footerInfo="ENSURE IEC 60811-504 • CICLO #8.420.100"
                status="GRAVANDO"
              >
                <Video
                  aspectRatio="16/9"
                  isSimulated={true}
                  caption="ENSAIO DE FLEXÃO DINÂMICA BERUF"
                />
              </MediaFrame>
            </Col>

            {/* Ratios row: 4:3, 1:1, 21:9 */}
            <Col span={4} md={4} lg={4}>
              <Text size="caption" tone="muted" style={{ marginBottom: 6 }}>Aspect Ratio 4:3</Text>
              <Image alt="Especificação 4:3" aspectRatio="4/3" overlay="none" />
            </Col>

            <Col span={4} md={4} lg={4}>
              <Text size="caption" tone="muted" style={{ marginBottom: 6 }}>Aspect Ratio 1:1 (Quadrado)</Text>
              <Image alt="Especificação 1:1" aspectRatio="1/1" overlay="orange" />
            </Col>

            <Col span={4} md={8} lg={4}>
              <Text size="caption" tone="muted" style={{ marginBottom: 6 }}>Aspect Ratio 21:9 (Cinemático)</Text>
              <Image alt="Especificação 21:9" aspectRatio="21/9" overlay="gradient" />
            </Col>
          </Grid>
        </Container>
      </Section>

      {/* 08. MOTION FOUNDATION */}
      <Section id="motion" spacing="regular">
        <Container maxWidth="2xl">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>08 // MOTION TOKENS & FOUNDATION</div>
            <Heading level="h2" className={styles.sectionTitle}>
              Sistema de 3 Níveis & Curvas de Movimento
            </Heading>
            <Text tone="secondary" className={styles.sectionDesc}>
              A arquitetura motion separa <strong>UI Motion</strong> (micro, fast, base, slow), <strong>Editorial Motion</strong> (editorial, reveal, image) e <strong>Cinematic Motion</strong> (cinematic, hero, section). Teste abaixo a resposta das durações com os easings configurados.
            </Text>
          </div>

          {/* Interactive Motion Playground */}
          <div className={styles.panel}>
            <div className={styles.motionPlayground}>
              <div className={styles.motionControls}>
                <div>
                  <Text size="caption" tone="muted" style={{ marginBottom: 4 }}>Duração Selecionada:</Text>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      background: 'var(--color-bg-base)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-xs)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                    }}
                  >
                    <optgroup label="1. UI Motion">
                      <option value="micro">UI Micro ({durationMap.micro})</option>
                      <option value="fast">UI Fast ({durationMap.fast})</option>
                      <option value="base">UI Base ({durationMap.base})</option>
                      <option value="slow">UI Slow ({durationMap.slow})</option>
                    </optgroup>
                    <optgroup label="2. Editorial Motion">
                      <option value="editorial">Editorial ({durationMap.editorial})</option>
                      <option value="reveal">Editorial Reveal ({durationMap.reveal})</option>
                      <option value="image">Editorial Image ({durationMap.image})</option>
                    </optgroup>
                    <optgroup label="3. Cinematic Motion">
                      <option value="cinematic">Cinematic ({durationMap.cinematic})</option>
                      <option value="hero">Cinematic Hero ({durationMap.hero})</option>
                      <option value="section">Cinematic Section ({durationMap.section})</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <Text size="caption" tone="muted" style={{ marginBottom: 4 }}>Curva de Easing:</Text>
                  <select
                    value={selectedEase}
                    onChange={(e) => setSelectedEase(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      background: 'var(--color-bg-base)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-xs)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                    }}
                  >
                    <option value="expo">expo (Mechanical Decel)</option>
                    <option value="cinematic">cinematic (Ultra-smooth)</option>
                    <option value="standard">standard (UI default)</option>
                    <option value="out">out (Entrance)</option>
                    <option value="inOut">inOut (State change)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Button variant="energy" onClick={triggerMotionTest} fullWidth suffixIcon={<PlayIcon size={16} />}>
                    Disparar Movimento
                  </Button>
                </div>
              </div>

              {/* Physical Motion Track */}
              <div className={styles.motionTrack}>
                <div
                  className={styles.motionBox}
                  style={{
                    transform: isAnimating ? 'translateX(min(650px, calc(100vw - 120px)))' : 'translateX(0px)',
                    transition: `transform ${durationMap[selectedDuration]} ${easeMap[selectedEase]}`,
                  }}
                >
                  GSAP
                </div>
              </div>

              {/* Componentes Preparatórios Motion */}
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-6)' }}>
                <Text size="caption" tone="muted" style={{ marginBottom: 'var(--space-3)' }}>
                  Componentes Preparatórios Prontos para a Fase de Motion:
                </Text>
                <Grid gap="md">
                  <Col span={4} md={4} lg={3}>
                    <div style={{ padding: 'var(--space-3)', background: 'var(--color-bg-base)', border: '1px solid var(--color-border)', borderRadius: 2 }}>
                      <Text size="mono" tone="accent">&lt;Reveal /&gt;</Text>
                      <Reveal variant="slideUp">
                        <Text size="sm">Fade + Slide Y preparado</Text>
                      </Reveal>
                    </div>
                  </Col>

                  <Col span={4} md={4} lg={3}>
                    <div style={{ padding: 'var(--space-3)', background: 'var(--color-bg-base)', border: '1px solid var(--color-border)', borderRadius: 2 }}>
                      <Text size="mono" tone="accent">&lt;TextReveal /&gt;</Text>
                      <TextReveal splitBy="words">
                        BERUF Precisão Mecânica
                      </TextReveal>
                    </div>
                  </Col>

                  <Col span={4} md={4} lg={3}>
                    <div style={{ padding: 'var(--space-3)', background: 'var(--color-bg-base)', border: '1px solid var(--color-border)', borderRadius: 2 }}>
                      <Text size="mono" tone="accent">&lt;ImageReveal /&gt;</Text>
                      <ImageReveal>
                        <Text size="sm">Escala e cortina de máscara</Text>
                      </ImageReveal>
                    </div>
                  </Col>

                  <Col span={4} md={4} lg={3}>
                    <div style={{ padding: 'var(--space-3)', background: 'var(--color-bg-base)', border: '1px solid var(--color-border)', borderRadius: 2 }}>
                      <Text size="mono" tone="accent">&lt;MaskReveal /&gt;</Text>
                      <MaskReveal shape="inset">
                        <Text size="sm">Clip-path poligonal</Text>
                      </MaskReveal>
                    </div>
                  </Col>
                </Grid>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
