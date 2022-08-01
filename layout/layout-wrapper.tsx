import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Footer from './footer';
import NavbarBottom from './navbar-bottom';

const NavbarComponent = dynamic(() => import('./navbar'), { ssr: false });

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex flexDir={'column'} h="max-content" pos="absolute" top={0} bottom={0} w="full">
      <NavbarComponent />
      <NavbarBottom />
      {children}
      <Footer />
    </Flex>
  );
};

export default LayoutWrapper;
