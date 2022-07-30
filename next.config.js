/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'links.papareact.com',
      'fakestoreapi.com',
      'loremflickr.com',
      'source.unsplash.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
