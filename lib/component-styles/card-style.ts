import { ComponentStyleConfig } from '@chakra-ui/react';

export const Card: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === 'dark' ? '#1F2937' : 'whiteAlpha.800',
    display: 'flex',
    alignItems: 'center',
    padding: 3,
    borderRadius: 'lg',
    flexDirection: 'column',
  }),
};
