import { ComponentStyleConfig } from '@chakra-ui/react';

export const Navbar: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.800',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    maxHeight: 20,
    left: 0,
    right: 0,
    top: 0,
  }),
};
