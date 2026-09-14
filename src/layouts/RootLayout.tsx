import React from 'react';
import { useTheme } from '../design-system/theme';
import { BerufBrandHeader } from '../assets/brand/BerufLogo';
import { Container } from '../components/ui/Container';
import styles from './RootLayout.module.css';

interface RootLayoutProps {
  children: React.ReactNode;
  currentRoute?: string;
  onNavigate?: (route: string) => void;
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  currentRoute = '/',
  onNavigate,
}) => {
  const { theme, setTheme } = useTheme();

  const handleRouteClick = (e: React.MouseEvent<HTMLAnchorElement>, route: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(route);
    }
  };

  const isHome = currentRoute === '/';
  const isBrandDna = currentRoute === '/brand-dna';
  const isTypeLab = currentRoute === '/type-lab';
  const isDs = currentRoute === '/ds';

  return (
    <div className={styles.rootLayout}>
      {/* Editorial Sticky Header (displayed for internal labs, hidden on Fullscreen Home) */}
      {!isHome && (
        <header className={styles.header}>
          <Container maxWidth="2xl">
            <div className={styles.headerInner}>
              <a
                href="/"
                onClick={(e) => handleRouteClick(e, '/')}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <BerufBrandHeader showTagline={true} />
              </a>

              {/* Route Switcher: Home vs Foundation DS vs Brand DNA vs Type Lab */}
              <div className={styles.routePills} role="tablist" aria-label="Rotas Internas">
                <a
                  href="/"
                  className={[styles.routeBtn, isHome ? styles.routeBtnActive : ''].join(' ')}
                  onClick={(e) => handleRouteClick(e, '/')}
                  role="tab"
                  aria-selected={isHome}
                >
                  {isHome && <span className={styles.routeDotActive} />}
                  <span>00 Home (Hero)</span>
                </a>

                <a
                  href="/ds"
                  className={[styles.routeBtn, isDs ? styles.routeBtnActive : ''].join(' ')}
                  onClick={(e) => handleRouteClick(e, '/ds')}
                  role="tab"
                  aria-selected={isDs}
                >
                  {isDs && <span className={styles.routeDotActive} />}
                  <span>01 Fundação DS</span>
                </a>

                <a
                  href="/brand-dna"
                  className={[styles.routeBtn, isBrandDna ? styles.routeBtnActive : ''].join(' ')}
                  onClick={(e) => handleRouteClick(e, '/brand-dna')}
                  role="tab"
                  aria-selected={isBrandDna}
                >
                  {isBrandDna && <span className={styles.routeDotActive} />}
                  <span>01.5 Brand DNA</span>
                </a>

                <a
                  href="/type-lab"
                  className={[styles.routeBtn, isTypeLab ? styles.routeBtnActive : ''].join(' ')}
                  onClick={(e) => handleRouteClick(e, '/type-lab')}
                  role="tab"
                  aria-selected={isTypeLab}
                >
                  {isTypeLab && <span className={styles.routeDotActive} />}
                  <span>02 Type Lab</span>
                </a>
              </div>

              {/* In-page quick jump navigation */}
              <nav className={styles.nav} aria-label="Navegação da Página">
                {isBrandDna && (
                  <>
                    <a href="#bloco-01" className={styles.navLink}>01 Hero</a>
                    <a href="#bloco-02" className={styles.navLink}>02 Essência</a>
                    <a href="#bloco-03" className={styles.navLink}>03 Produto</a>
                    <a href="#bloco-04" className={styles.navLink}>04 Laranja</a>
                    <a href="#bloco-05" className={styles.navLink}>05 Aplicações</a>
                    <a href="#bloco-06" className={styles.navLink}>06 Fechamento</a>
                  </>
                )}

                {isTypeLab && (
                  <>
                    <a href="#type-01" className={styles.navLink}>01 Space</a>
                    <a href="#type-02" className={styles.navLink}>02 Urb 400</a>
                    <a href="#type-03" className={styles.navLink}>03 Urb 500</a>
                    <a href="#type-04" className={styles.navLink}>04 Urb 600</a>
                    <a href="#type-05" className={styles.navLink}>05 Jakarta</a>
                    <a href="#type-06" className={styles.navLink}>06 Barlow</a>
                  </>
                )}

                {isDs && (
                  <>
                    <a href="#themes" className={styles.navLink}>Temas</a>
                    <a href="#typography" className={styles.navLink}>Tipografia</a>
                    <a href="#colors" className={styles.navLink}>Cores</a>
                    <a href="#grid" className={styles.navLink}>Grid</a>
                    <a href="#spacing" className={styles.navLink}>Espaço</a>
                    <a href="#components" className={styles.navLink}>Ações</a>
                    <a href="#media" className={styles.navLink}>Mídia</a>
                    <a href="#motion" className={styles.navLink}>Motion</a>
                  </>
                )}
              </nav>

              {/* Instant Theme Switcher */}
              <div className={styles.themeSelector} role="radiogroup" aria-label="Seletor de Tema">
                <button
                  type="button"
                  className={[styles.themeBtn, theme === 'cream' ? styles.themeBtnActive : ''].join(' ')}
                  onClick={() => setTheme('cream')}
                  role="radio"
                  aria-checked={theme === 'cream'}
                  title="Ativar Tema Cream"
                >
                  <span className={[styles.themeDot, styles.dotCream].join(' ')} />
                  <span>Cream</span>
                </button>
                <button
                  type="button"
                  className={[styles.themeBtn, theme === 'black' ? styles.themeBtnActive : ''].join(' ')}
                  onClick={() => setTheme('black')}
                  role="radio"
                  aria-checked={theme === 'black'}
                  title="Ativar Tema Black"
                >
                  <span className={[styles.themeDot, styles.dotBlack].join(' ')} />
                  <span>Black</span>
                </button>
                <button
                  type="button"
                  className={[styles.themeBtn, theme === 'orange' ? styles.themeBtnActive : ''].join(' ')}
                  onClick={() => setTheme('orange')}
                  role="radio"
                  aria-checked={theme === 'orange'}
                  title="Ativar Tema Orange"
                >
                  <span className={[styles.themeDot, styles.dotOrange].join(' ')} />
                  <span>Orange</span>
                </button>
              </div>
            </div>
          </Container>
        </header>
      )}

      {/* Main Content Area */}
      <main className={styles.main}>
        {children}
      </main>

      {/* Discreet floating lab dock when viewing Home */}
      {isHome && (
        <aside className={styles.floatingDock} aria-label="Navegação de Laboratórios de Design">
          <a
            href="/"
            className={[styles.floatingBtn, styles.floatingBtnActive].join(' ')}
            onClick={(e) => handleRouteClick(e, '/')}
            title="Home (Nova Hero)"
          >
            <span className={styles.floatingDotActive} />
            <span>00 Home</span>
          </a>
          <a
            href="/ds"
            className={styles.floatingBtn}
            onClick={(e) => handleRouteClick(e, '/ds')}
            title="Fundação Design System"
          >
            <span>01 DS</span>
          </a>
          <a
            href="/brand-dna"
            className={styles.floatingBtn}
            onClick={(e) => handleRouteClick(e, '/brand-dna')}
            title="Brand DNA / Visual Proof"
          >
            <span>01.5 DNA</span>
          </a>
          <a
            href="/type-lab"
            className={styles.floatingBtn}
            onClick={(e) => handleRouteClick(e, '/type-lab')}
            title="Typography Lab"
          >
            <span>02 Type</span>
          </a>
        </aside>
      )}

      {/* Technical Status Footer (for internal labs) */}
      {!isHome && (
        <footer className={styles.footer}>
          <Container maxWidth="2xl">
            <div className={styles.footerInner}>
              <div>
                <span style={{ color: 'var(--color-brand-orange)', fontWeight: 600 }}>BERUF BRASIL</span>
                {' '}— Automação Industrial, Cabos Especiais & Robótica • Desde 1998
              </div>
              <div>
                <span>FASE 02.0 // HERO TYPOGRAPHY LAB</span>
              </div>
            </div>
          </Container>
        </footer>
      )}
    </div>
  );
};
