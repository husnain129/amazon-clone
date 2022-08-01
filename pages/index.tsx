import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import Dashboard from '../components/dashboard';
import ImageSwiper from '../components/swiper/image-swiper';
import { useProduct } from '../context/product';
import LayoutWrapper from '../layout/layout-wrapper';
import { Product } from '../types/product';

const Home = ({ posts }: { posts: Product.Root[] }) => {
  const { setProduct, product } = useProduct();
  useEffect(() => {
    posts.length > 0 && setProduct(posts);
  }, [setProduct, posts]);

  return (
    <LayoutWrapper>
      <Flex w="full" flexDir={'column'} h="max-content" pos={'relative'} zIndex={1}>
        <ImageSwiper />
        <Flex w="full" h="max-content" pos={'absolute'} pb="2em" top={'70%'} zIndex={21}>
          {product.length > 0 && <Dashboard />}
        </Flex>
      </Flex>
    </LayoutWrapper>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=18s');
  const posts = (await res.json()) as Product.Root[];
  return {
    props: {
      posts,
    },
  };
}

export default Home;
