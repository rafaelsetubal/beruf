import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from './design-system/theme';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/Home';
import { FoundationShowcase } from './pages/FoundationShowcase';
import { BrandDna } from './pages/BrandDna';
import { TypeLab } from './pages/TypeLab';
import './design-system/styles/main.css';

export function App() {
  const [route, setRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/brand-dna' || path === '/type-lab' || path === '/ds') return path;
      return '/';
    }
    return '/';
  });

  const navigate = useCallback((targetPath: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', targetPath);
      setRoute(targetPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setRoute(path === '/brand-dna' || path === '/type-lab' || path === '/ds' ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <ThemeProvider defaultTheme="cream">
      <RootLayout currentRoute={route} onNavigate={navigate}>
        {route === '/' && <HomePage />}
        {route === '/ds' && <FoundationShowcase />}
        {route === '/type-lab' && <TypeLab />}
        {route === '/brand-dna' && <BrandDna />}
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
