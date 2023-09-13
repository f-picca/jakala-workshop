/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'eu-images.contentstack.com',
          port: '',
          pathname: '/v3/assets/**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dvbqso85l/image/upload/**',
        },
      ],
    },
  }

module.exports = nextConfig


