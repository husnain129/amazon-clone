import Product from '../../components/product';
import LayoutWrapper from '../../layout/layout-wrapper';
import { Product as ProductType } from '../../types/product';

const ProductPage = ({ _product }: { _product: ProductType.Root }) => {
  return (
    <LayoutWrapper>
      <Product product={_product} />
    </LayoutWrapper>
  );
};

ProductPage.getInitialProps = async ({ query: { id } }: { query: { id: string } }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const _product = (await res.json()) as ProductType.Root;
  return { _product };
};

export default ProductPage;
