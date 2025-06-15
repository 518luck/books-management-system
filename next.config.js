/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/book',
        permanent: true, // 设置为 true 表示永久重定向（308），false 表示临时重定向（307）
      },
    ]
  },
}

module.exports = nextConfig
