import { Flex, Image, Text } from '@chakra-ui/react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Public } from '../../types/public';
import ImagesGenerator from '../../utils/images-generator';

const ImageSwiperHorizontal = ({ type }: { type: Public.Image }) => {
  return (
    <Flex>
      <Text fontSize={'1.2em'} fontWeight="semibold">
        Top {type} for you
      </Text>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide
            key={index}
            style={{ height: '40vh', display: 'flex', gap: '.5em' }}
          >
            {ImagesGenerator(type)
              .multiple(4)
              .map((url, index) => (
                <Image
                  key={index}
                  src={url + `?${Math.floor(Math.random() * 1000)}`}
                  width={'full'}
                  height={'full'}
                  alt="logo"
                  objectFit={'cover'}
                />
              ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default ImageSwiperHorizontal;
