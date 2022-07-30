import { Public } from '../types/public';

const ImagesGenerator = (type: Public.Image) => {
  const image_src = `https://source.unsplash.com/random/900×700/?${type}`;
  const fake_images: string[] = [
    'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg',
  ];
  return {
    swiper: fake_images,
    four: () => {
      return [...Array(4)].map(() => {
        return image_src;
      });
    },
    one: () => image_src,
  };
};

export default ImagesGenerator;
