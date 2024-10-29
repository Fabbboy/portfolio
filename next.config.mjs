/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
