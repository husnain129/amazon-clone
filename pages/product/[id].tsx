import { Flex } from '@chakra-ui/react';
import Product from '../../components/product';
import Footer from '../../layout/footer';
import Navbar from '../../layout/navbar';
import NavbarBottom from '../../layout/navbar-bottom';
import { Product as ProductType } from '../../types/product';

const ProductPage = ({ _product }: { _product: ProductType.Root }) => {
  return (
    <Flex flexDir={'column'} minH="100vh">
      <Navbar />
      <NavbarBottom />
      <Product product={_product} />
      <Footer />
    </Flex>
  );
};

ProductPage.getInitialProps = async ({ query: { id } }: { query: { id: string } }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const _product = (await res.json()) as ProductType.Root;
  console.log('pridcut = ', _product);
  return { _product };
};

export default ProductPage;
