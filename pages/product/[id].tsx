import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Product from '../../components/product';
import Footer from '../../layout/footer';
import NavbarBottom from '../../layout/navbar-bottom';
import { Product as ProductType } from '../../types/product';

const NavbarComponent = dynamic(() => import('../../layout/navbar'), { ssr: false });

const ProductPage = ({ _product }: { _product: ProductType.Root }) => {
  return (
    <Flex flexDir={'column'} minH="100vh">
      <NavbarComponent />
      <NavbarBottom />
      <Product product={_product} />
      <Footer />
    </Flex>
  );
};

ProductPage.getInitialProps = async ({ query: { id } }: { query: { id: string } }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const _product = (await res.json()) as ProductType.Root;
  return { _product };
};

export default ProductPage;
