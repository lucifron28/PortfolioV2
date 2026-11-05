/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
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
