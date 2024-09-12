/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Habilita a estrutura de diretórios `app`
  },
  output: 'export', // exportando como HTML estático
  distDir: 'out', // Gera o build em uma pasta chamada 'out'
};

module.exports = nextConfig;
