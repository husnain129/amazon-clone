import { Flex } from '@chakra-ui/react';
import ImagesGenerator from '../../utils/images-generator';
import CardMax from '../cards/card-max';
import CardMini from '../cards/card-mini';

const Dashboard = () => {
  return (
    <Flex w="full" flexDir={'column'} h="max-content" px={'2em'}>
      <Flex w="full" justifyContent={'space-between'}>
        <CardMini type="Fashion" images={ImagesGenerator('Fashion').four()} />
        <CardMax type="Film" image={ImagesGenerator('Film').one()} />
        <CardMini type="Food" images={ImagesGenerator('Food').four()} />
        <CardMax type="Sports" image={ImagesGenerator('Sports').one()} />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
