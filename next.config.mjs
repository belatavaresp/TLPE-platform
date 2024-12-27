/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        config.watchOptions = {
          poll: 1000, // Check for changes every second
          aggregateTimeout: 300, // Delay before rebuilding
        };
      }
      return config;
    },
    images:{
      remotePatterns: [{hostname: "images.pexels.com"}],
    },
  };
  
  export default nextConfig;
  