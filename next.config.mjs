/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "wefit-react-web-test.s3.amazonaws.com",
      },
    ],
  },
}

export default nextConfig
