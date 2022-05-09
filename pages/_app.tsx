import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'lib/theme';
import type { AppProps } from 'next/app';

function DevtoolsApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default DevtoolsApp;
