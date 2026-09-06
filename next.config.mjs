/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/Cada_CV.pdf',
        destination: '/Ron_Vincent_Cada_CV.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
