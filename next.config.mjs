/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  // basePath: "/part3",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
