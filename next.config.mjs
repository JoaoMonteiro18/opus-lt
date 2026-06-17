/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // As imagens de placeholder vêm do Unsplash.
    // TODO: ao trocar pelas fotos reais das obras (em /public/images),
    // você pode remover/ajustar estes domínios remotos.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
