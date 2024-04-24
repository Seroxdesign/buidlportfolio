/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'nft-cdn.alchemy.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'metadata.ens.domains',
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;