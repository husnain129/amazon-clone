import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Dashboard from '../components/dashboard';
import ImageSwiper from '../components/swiper/image-swiper';
import Navbar from '../layout/navbar';
import NavbarBottom from '../layout/navbar-bottom';

const Home: NextPage = () => {
  return (
    <Flex
      w="full"
      flexDir={'column'}
      h="max-content"
      bg={'red'}
      pos="absolute"
      top={0}
      bottom={0}

      // minH={'100vh'}
    >
      <Navbar />
      <NavbarBottom />
      <Flex w="full" h="max-content" pos={'relative'} zIndex={1}>
        <ImageSwiper />
        <Flex
          w="full"
          h="max-content"
          pos={'absolute'}
          pb="2em"
          top={'70%'}
          zIndex={21}
        >
          <Dashboard />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
