/**
 * BERUF Brasil — Theme System Types
 */

export type Theme = 'cream' | 'black' | 'orange';

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
  isCream: boolean;
  isBlack: boolean;
  isOrange: boolean;
}
