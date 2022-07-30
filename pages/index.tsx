import { Flex } from '@chakra-ui/react';
import Dashboard from '../components/dashboard';
import ImageSwiper from '../components/swiper/image-swiper';
import Navbar from '../layout/navbar';
import NavbarBottom from '../layout/navbar-bottom';
import { Product } from '../types/product';

const Home = ({ posts }: { posts: Product.Root[] }) => {
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
          {/* {typeof window === 'undefined' ? <Spinner /> : <Dashboard />} */}
          <Dashboard posts={posts} />
        </Flex>
      </Flex>
    </Flex>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://fakestoreapi.com/products?limit=50');
  const posts = (await res.json()) as Product.Root[];
  return {
    props: {
      posts,
    },
  };
}

export default Home;
