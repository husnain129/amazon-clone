import { useEffect, useState } from 'react';
import Cart from '../components/cart/cart';
import { useCart } from '../context/cart';
import LayoutWrapper from '../layout/layout-wrapper';
import { Product as ProductType } from '../types/product';

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
    <LayoutWrapper>
      {cartItems.length > 0 && <Cart cartItems={cartItems} />}
    </LayoutWrapper>
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
