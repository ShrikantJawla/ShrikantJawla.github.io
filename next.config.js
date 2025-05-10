/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
        port: "",
        pathname: "*",
      },
    ],
  },
  // experimental: {
  //   metadataBase: new URL("http://localhost:3000"),
  // },
  output: "export",
  basePath: "/ShrikantJawla.github.io", 
};

module.exports = nextConfig;
