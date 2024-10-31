/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
          },
          {
            protocol: 'https',
            hostname: 's.gravatar.com'
          },
          {
            protocol: 'https',
            hostname: 'loremflickr.com'
          },
          {
            protocol: 'https',
            hostname: '*'
          }
        ],
      },
};

export default nextConfig;
