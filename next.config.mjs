/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Wildcard for any domain
        pathname: '**', // Wildcard for any path
      },
    ],
  },
};


export default nextConfig;