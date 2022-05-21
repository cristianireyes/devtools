import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from 'lib/theme';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Open Sans Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
        {/* Inter Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Open+Sans:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
