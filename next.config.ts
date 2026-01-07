/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
/*};

export default nextConfig;*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/AW-DIGITALS",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

