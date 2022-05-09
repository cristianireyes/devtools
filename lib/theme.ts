import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';
import { mode, Styles } from '@chakra-ui/theme-tools';

const BG_COLOR = {
  dark: '#202023',
  light: '#f0e7db',
};

const styles: Styles = {
  global: props => ({
    body: {
      bg: mode(BG_COLOR.light, BG_COLOR.dark)(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, styles }) as Theme;
