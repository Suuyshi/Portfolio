/** @type {import('next').NextConfig} */
const { basePath } = require("./lib/config");

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

module.exports = nextConfig;
