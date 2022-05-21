import {
  ComponentStyleConfig,
  extendTheme,
  Theme,
  ThemeConfig,
} from '@chakra-ui/react';
import { mode, Styles } from '@chakra-ui/theme-tools';
import { Card, Navbar } from './component-styles';

const BG_COLOR = {
  /* dark: '#202023', */
  dark: 'gray.800',
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

const components: Record<string, ComponentStyleConfig> = {
  Container: {
    variants: {
      'app-content': {
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
  Heading: {
    variants: {
      'card-title': {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 'md',
        color: 'tomato',
      },
      logo: {
        fontFamily: 'Open Sans',
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: '4xl',
      },
      'title-section': {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 'xl',
        lineHeight: 7,
      },
    },
  },
  Link: {
    variants: {
      logo: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  Card,
  Navbar,
};

export const theme = extendTheme({ components, config, styles }) as Theme;
