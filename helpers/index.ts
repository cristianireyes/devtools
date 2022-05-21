import { FunctionComponent, ReactNode } from 'react';

export type FunctionComponentWithChildren = FunctionComponent<{
  children: ReactNode;
}>;
