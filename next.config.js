/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["https://zamzamgraphics.github.io"] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zamzamgraphics.github.io",
        port: "",
        pathname: "/ZamZamGraphics/projects/**",
      },
    ],
  },
};

module.exports = nextConfig;
