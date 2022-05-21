import { ColorMode as ThemeColorMode } from '@chakra-ui/react';

export enum ColorMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export const isDarkMode = (colorMode: ThemeColorMode) =>
  colorMode === ColorMode.DARK;
