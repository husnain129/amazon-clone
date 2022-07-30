import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { Product } from '../../types/product';
import { stars } from '../../utils/stars';

const Card = ({ post }: { post: Product.Root }) => {
  return (
    <Flex
      p="1em"
      flexDir={'column'}
      w="20em"
      h={'30em'}
      bg="white"
      justifyContent={'space-between'}
      boxShadow="sm"
    >
      <Flex w="full" h="full" flexDir={'column'} justifyContent="space-between">
        <Image
          width={'full'}
          maxH={'12em'}
          alt="products"
          src={post.image}
          objectFit="contain"
        />
        <Text fontSize={'1.2em'} fontWeight="semibold">
          {post.title.slice(0, 50)}...
        </Text>
        <Flex>{stars(post.rating.rate)}</Flex>
        <Text>{post.description.slice(0, 85)}...</Text>
        <Button w="full" colorScheme={'yellow'}>
          Add to cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;
