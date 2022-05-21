import { FunctionComponent } from 'react';
import NextLink from 'next/link';
import { Heading, Link } from '@chakra-ui/react';

export const AppLogo: FunctionComponent = () => {
  return (
    <NextLink href={'/'} passHref>
      <Link variant="logo">
        <Heading
          variant={'logo'}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Devtools
        </Heading>
      </Link>
    </NextLink>
  );
};
