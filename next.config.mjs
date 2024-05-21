/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "135.181.108.207",
        port: "",
        pathname: "/media/product/product_variant/**",
      },
      
    ],
  },
};

export default nextConfig;
