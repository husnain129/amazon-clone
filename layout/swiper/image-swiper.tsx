import { Image } from '@chakra-ui/react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImagesGenerator from '../../utils/images-generator';

const ImageSwiper = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {ImagesGenerator('Sports').swiper.map((url, index) => (
          <SwiperSlide key={index} style={{ height: '90vh' }}>
            {
              <Image
                src={url}
                width={'100%'}
                height={'full'}
                alt="logo"
                objectFit={'contain'}
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default ImageSwiper;
