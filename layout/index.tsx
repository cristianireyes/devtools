import { Container } from '@chakra-ui/react';
import { FunctionComponentWithChildren } from 'helpers';
import { Navbar } from './components/navbar';

export const AppLayout: FunctionComponentWithChildren = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container variant={'app-content'}>{children}</Container>
    </>
  );
};
