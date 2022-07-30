import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { Product } from '../../types/product';
import Card from '../cards/card';

const Dashboard = ({ posts }: { posts: Product.Root[] }) => {
  return (
    <Flex w="full" flexDir={'column'} gap={'2em'} px="2em" h="max-content">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {posts.map((post, index) => (
          <GridItem key={index} w="100%">
            <Card post={post} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

// const CardMiniWrapper = () => {
//   return (
//     <Flex flexDir={'column'} w="full" gap={'1em'}>
//       <Flex w="full" justifyContent={'space-between'}>
//         <CardMini
//           type={generateImageType}
//           images={ImagesGenerator('Fashion').four()}
//         />
//         <CardMax
//           type={generateImageType}
//           image={ImagesGenerator('Film').one()}
//         />
//         <CardMini
//           type={generateImageType}
//           images={ImagesGenerator('Food').four()}
//         />
//         <CardMax
//           type={generateImageType}
//           image={ImagesGenerator('Sports').one()}
//         />
//       </Flex>
//       <Flex w="full" justifyContent={'space-between'}>
//         <CardMini
//           type={generateImageType}
//           images={ImagesGenerator('Fashion').four()}
//         />
//         <CardMax
//           type={generateImageType}
//           image={ImagesGenerator('Film').one()}
//         />
//         <CardMini
//           type={generateImageType}
//           images={ImagesGenerator('Food').four()}
//         />
//         <CardMax
//           type={generateImageType}
//           image={ImagesGenerator('Sports').one()}
//         />
//       </Flex>
//     </Flex>
//   );
// };

export default Dashboard;
