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
      ],
    },
  }

module.exports = nextConfig


