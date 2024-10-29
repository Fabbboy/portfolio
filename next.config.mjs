import * as dotenv from "dotenv";
dotenv.config({ path: "prod.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  basePath: process.env.BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
