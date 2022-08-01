import { Button, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Product } from '../../types/product';
import { stars } from '../../utils/stars';

const Card = ({ post, isLarge }: { post: Product.Root; isLarge?: boolean }) => {
  const title = isLarge ? post.title.slice(0, 50) : post.title.slice(0, 30);
  const description = isLarge
    ? post.description.slice(0, 120)
    : post.description.slice(0, 85);
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
          src={post.image}
          objectFit="contain"
          transition={'all 300ms'}
          cursor={'pointer'}
          _hover={{
            transform: 'scale(1.1)',
          }}
        />
        <Link href={`product/${post.id}`}>
          <Text cursor={'pointer'} fontSize={'1.2em'} fontWeight="semibold">
            {title}...
          </Text>
        </Link>
        <Flex>{stars(post.rating.rate)}</Flex>
        <Text>{description}...</Text>
        <Button w="full" colorScheme={'yellow'}>
          Add to cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;
