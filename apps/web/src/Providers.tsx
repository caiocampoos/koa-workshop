import { BrowserRouter } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay';
import { ChakraProvider } from '@chakra-ui/react';


import { RelayEnvironment } from './relay/environment';

interface Props {
  children: React.ReactElement;
}

export const Providers = ({ children }: Props) => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <BrowserRouter>
        <ChakraProvider>{children}</ChakraProvider>
    </BrowserRouter>
  </RelayEnvironmentProvider>
);