/* eslint-disable react/no-children-prop */
import { Button, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';
import { Product as ProductType } from '../../types/product';

const Product = ({ product }: { product: ProductType.Root }) => {
  const router = useRouter();
  return (
    <Flex w={'full'} gap="2em" flexDir="column" p="2em" alignItems={'center'} minH="90vh">
      <Flex w="full" alignItems={'center'} justifyContent="flex-start">
        <IconButton
          colorScheme={'green'}
          aria-label="go back"
          children={<BsArrowLeft />}
          onClick={() => router.back()}
        />
      </Flex>
      <Flex flex={1} gap="4em" h={'25em'}>
        <Image
          display={'flex'}
          flex={1}
          src={product.image}
          alt="da"
          width={'20em'}
          height="25em"
          objectFit="contain"
          borderRadius={'.4em'}
          transition={'all 300ms'}
        />
        <Flex
          flex={1}
          flexDir={'column'}
          alignItems="flex-start"
          justifyContent={'space-between'}
          h="full"
        >
          <Text fontSize={'1.8em'} textTransform="uppercase" fontWeight="bold">
            {product.title.slice(0, 30)}
          </Text>
          <Text pr={'6em'}>{product.description}</Text>
          <Flex gap={'.3em'} alignItems="center">
            <Text fontSize={'1.1em'} fontWeight="semibold">
              Rating:
            </Text>
            <Text>{product.rating.rate}</Text>
            <Text fontSize={'.8em'}>⭐</Text>
            <Text>({product.rating.count})</Text>
          </Flex>
          <Flex gap={'.3em'}>
            <Text fontSize={'1.1em'} fontWeight="semibold">
              Company:
            </Text>
            <Text>marcos</Text>
          </Flex>
          <Flex gap={'.3em'}>
            <Text fontSize={'1.1em'} fontWeight="semibold">
              Stock:
            </Text>
            <Text>Available in stock</Text>
          </Flex>
          <Text fontSize={'1.1em'} fontWeight="semibold">
            ${product.price}
          </Text>
          <Button w="10em" size={'lg'} colorScheme={'yellow'}>
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;
