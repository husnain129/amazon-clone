import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Cart from '../components/cart/cart';
import { useCart } from '../context/cart';
import Footer from '../layout/footer';
import NavbarBottom from '../layout/navbar-bottom';
import { Product as ProductType } from '../types/product';

const NavbarComponent = dynamic(() => import('../layout/navbar'), { ssr: false });

const CartPage = ({ products }: { products: ProductType.Root[] }) => {
  const { cart } = useCart();
  const [cartItems, setCartItems] = useState<ProductType.Root[]>(
    [] as ProductType.Root[]
  );
  useEffect(() => {
    setCartItems(
      products.filter((product) => cart.filter((c) => c.id === product.id).length > 0)
    );
  }, [products, cart]);
  return (
    <Flex flexDir={'column'} minH="100vh" h="max-content" pb="3em" bg="#eaeded">
      <NavbarComponent />
      <NavbarBottom />
      {cartItems.length > 0 && <Cart cartItems={cartItems} />}
      <Footer />
    </Flex>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=50');
  const products = (await res.json()) as ProductType.Root[];
  return {
    props: {
      products,
    },
  };
}

export default CartPage;
