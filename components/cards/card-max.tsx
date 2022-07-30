import { Flex, Image, Text } from '@chakra-ui/react';
import { Public } from '../../types/public';

const CardMax = ({ type, image }: { type: Public.Image; image: string }) => {
  return (
    <Flex
      p="1em"
      flexDir={'column'}
      w="20em"
      minH={'32em'}
      h="max-content"
      bg="white"
      justifyContent={'space-between'}
      boxShadow="sm"
    >
      <Flex
        w="full"
        h="full"
        flexDir={'column'}
        gap={'1em'}
        justifyContent={'space-between'}
      >
        <Text fontSize={'1.1em'} fontWeight="bold">
          {type}
        </Text>
        <Image
          src={image}
          alt="electronic"
          w="full"
          objectFit={'cover'}
          h="25em"
        />
      </Flex>
      <Text cursor={'pointer'} fontSize={'.8em'} color="blue.400">
        Shop now
      </Text>
    </Flex>
  );
};

export default CardMax;
