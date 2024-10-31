import * as dotenv from "dotenv";
dotenv.config({ path: "prod.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.BUILD_STATIC === "true" ? "export" : undefined,
  distDir: "build",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
