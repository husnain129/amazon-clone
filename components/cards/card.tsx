import { Button, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useCart } from '../../context/cart';
import { Product } from '../../types/product';
import { stars } from '../../utils/stars';

const Card = ({ product, isLarge }: { product: Product.Root; isLarge?: boolean }) => {
  const { setCartItem,cart } = useCart();
  const title = isLarge ? product.title.slice(0, 50) : product.title.slice(0, 30);
  const description = isLarge
    ? product.description.slice(0, 120)
    : product.description.slice(0, 85);
  return (
    <Flex
      p="1em"
      flexDir={'column'}
      maxW={isLarge ? '42em' : '20em'}
      h={'30em'}
      bg="white"
      justifyContent={'space-between'}
      boxShadow="sm"
    >
      <Flex w="full" h="full" flexDir={'column'} justifyContent="space-between">
        <Image
          width={'full'}
          maxH={'10em'}
          alt="products"
          src={product.image}
          objectFit="contain"
          transition={'all 300ms'}
          cursor={'pointer'}
          _hover={{
            transform: 'scale(1.1)',
          }}
        />
        <Link href={`product/${product.id}`}>
          <Text cursor={'pointer'} fontSize={'1.2em'} fontWeight="semibold">
            {title}...
          </Text>
        </Link>
        <Flex>{stars(product.rating.rate)}</Flex>
        <Text>{description}...</Text>
        <Button
          w="full"
          colorScheme={'yellow'}
          onClick={() =>
            setCartItem({
              data: {
                id: product.id,
                count: 1,
              },
            })
          }
          disabled={cart.find((item) => item.id === product.id) as unknown as boolean}
        >
          Add to cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;
