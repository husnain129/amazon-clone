import { Flex, Image, Text } from '@chakra-ui/react';
import { Public } from '../../types/public';

const CardMini = ({
  type = 'Nature',
  images,
}: {
  type: Public.Image;
  images: string[];
}) => {
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
      <Text fontSize={'1.1em'} fontWeight="bold">
        Home & {type} essentials
      </Text>
      <Image
        src={images[0]}
        alt="cup"
        w={'full'}
        h={'14em'}
        objectFit={'cover'}
      />
      <Text>Espresso machines</Text>
      <Flex w="full">
        {images.map((url, index) => {
          if (index === 0) return null;
          return (
            <Flex flexDir={'column'} key={index} mx={index === 2 ? '.4em' : ''}>
              <Image
                src={url + `?${Math.floor(Math.random() * 500)}`}
                alt="cup"
                w={'6em'}
                h={'6em'}
                objectFit={'cover'}
              />
              <Text>{type}</Text>
            </Flex>
          );
        })}
      </Flex>
      <Text cursor={'pointer'} fontSize={'.8em'} color="blue.400">
        Shop now
      </Text>
    </Flex>
  );
};

export default CardMini;
